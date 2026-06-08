import React, { Component } from "react";
import dayjs from "dayjs";
import Timeline from "../../../src/index";

// ─── Data generation ─────────────────────────────────────────────────────────
const FAENAS = ["Faena Norte", "Faena Sur"];
const ZONAS = ["Zona A", "Zona B", "Zona C"];
const EQUIPOS = ["Excavadora 1", "Excavadora 2", "Camión 1", "Camión 2", "Perforadora 1"];

function buildGroups() {
  const groups = [];
  let id = 1;

  for (const faena of FAENAS) {
    const faenaId = id++;
    groups.push({ id: faenaId, faena, zona: "", equipo: "", level: 0, parent: null });

    for (const zona of ZONAS) {
      const zonaId = id++;
      groups.push({ id: zonaId, faena, zona, equipo: "", level: 1, parent: faenaId });

      for (const equipo of EQUIPOS) {
        groups.push({ id: id++, faena, zona, equipo, level: 2, parent: zonaId });
      }
    }
  }
  return groups;
}

function buildItems(groups) {
  const leafGroups = groups.filter((g) => g.level === 2);
  const items = [];
  let id = 1;
  const colors = ["#2196F3", "#4CAF50", "#FF9800", "#9C27B0", "#F44336"];

  for (const group of leafGroups) {
    const count = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const startOffset = Math.floor(Math.random() * 20);
      const duration = 1 + Math.floor(Math.random() * 5);
      items.push({
        id: id++,
        group: group.id,
        title: `Tarea ${id}`,
        start_time: dayjs().add(startOffset, "day").valueOf(),
        end_time: dayjs()
          .add(startOffset + duration, "day")
          .valueOf(),
        bgColor: colors[id % colors.length],
      });
    }
  }
  return items;
}

const ALL_GROUPS = buildGroups();
const ALL_ITEMS = buildItems(ALL_GROUPS);

// ─── Column definitions ───────────────────────────────────────────────────────
const FAENA_W = 120;
const ZONA_W = 100;
const EQUIPO_W = 140;

function makeSidebarColumns(openFaenas, openZonas, toggleFaena, toggleZona) {
  return [
    {
      id: "faena",
      title: "Faena",
      width: FAENA_W,
      renderCell: (group) => {
        if (group.level !== 0) return null;
        const open = !!openFaenas[group.id];
        return (
          <span
            onClick={() => toggleFaena(group.id)}
            style={{ cursor: "pointer", userSelect: "none", fontWeight: "bold", width: "100%" }}
          >
            {open ? "▼" : "▶"} {group.faena}
          </span>
        );
      },
    },
    {
      id: "zona",
      title: "Zona",
      width: ZONA_W,
      renderCell: (group) => {
        if (group.level !== 1) return null;
        const open = !!openZonas[group.id];
        return (
          <span
            onClick={() => toggleZona(group.id)}
            style={{ cursor: "pointer", userSelect: "none", paddingLeft: 8, width: "100%" }}
          >
            {open ? "▼" : "▶"} {group.zona}
          </span>
        );
      },
    },
    {
      id: "equipo",
      title: "Equipo",
      width: EQUIPO_W,
      renderCell: (group) => {
        if (group.level !== 2) return null;
        return <span style={{ paddingLeft: 16 }}>{group.equipo}</span>;
      },
    },
  ];
}

// ─── Component ────────────────────────────────────────────────────────────────
export default class MultiColumnsDemo extends Component {
  constructor(props) {
    super(props);

    // Start with all faenas open, all zonas closed
    const openFaenas = {};
    const openZonas = {};
    ALL_GROUPS.filter((g) => g.level === 0).forEach((g) => {
      openFaenas[g.id] = true;
    });

    this.state = {
      openFaenas,
      openZonas,
    };
  }

  toggleFaena = (id) => {
    this.setState((prev) => ({ openFaenas: { ...prev.openFaenas, [id]: !prev.openFaenas[id] } }));
  };

  toggleZona = (id) => {
    this.setState((prev) => ({ openZonas: { ...prev.openZonas, [id]: !prev.openZonas[id] } }));
  };

  getVisibleGroups() {
    const { openFaenas, openZonas } = this.state;
    return ALL_GROUPS.filter((g) => {
      if (g.level === 0) return true;
      if (g.level === 1) return !!openFaenas[g.parent];
      if (g.level === 2) {
        const zona = ALL_GROUPS.find((z) => z.id === g.parent);
        return !!openFaenas[zona?.parent] && !!openZonas[g.parent];
      }
      return false;
    });
  }

  render() {
    const { openFaenas, openZonas } = this.state;
    const visibleGroups = this.getVisibleGroups();
    const visibleGroupIds = new Set(visibleGroups.map((g) => g.id));
    const visibleItems = ALL_ITEMS.filter((item) => visibleGroupIds.has(item.group));

    const sidebarColumns = makeSidebarColumns(openFaenas, openZonas, this.toggleFaena, this.toggleZona);

    return (
      <Timeline
        groups={visibleGroups}
        items={visibleItems}
        keys={{
          groupIdKey: "id",
          groupTitleKey: "equipo",
          groupRightTitleKey: "equipo",
          itemIdKey: "id",
          itemTitleKey: "title",
          itemDivTitleKey: "title",
          itemGroupKey: "group",
          itemTimeStartKey: "start_time",
          itemTimeEndKey: "end_time",
        }}
        sidebarColumns={sidebarColumns}
        sidebarWidth={FAENA_W + ZONA_W + EQUIPO_W}
        defaultTimeStart={dayjs().startOf("week").valueOf()}
        defaultTimeEnd={dayjs().startOf("week").add(4, "week").valueOf()}
        stackItems
        canMove
        canResize="right"
        itemHeightRatio={0.75}
        lineHeight={36}
        horizontalLineClassNamesForGroup={(group) => (group.level < 2 ? ["row-root"] : [])}
        itemRenderer={({ item, getItemProps }) => (
          <div
            {...getItemProps({
              style: {
                background: item.bgColor,
                border: "none",
                borderRadius: 4,
                color: "#fff",
                fontSize: 12,
                padding: "2px 6px",
              },
            })}
          >
            {item.title}
          </div>
        )}
      />
    );
  }
}
