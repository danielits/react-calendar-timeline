import React, { useState, useEffect, useRef } from "react";
import { Component } from "react";
import { createPortal } from "react-dom";
import dayjs from "dayjs";

import Timeline, { TimelineMarkers, TodayMarker, CustomMarker, CursorMarker } from "../../../src/index";

var minTime = dayjs().add(-6, "months").valueOf();
var maxTime = dayjs().add(6, "months").valueOf();

// ─── Item types ──────────────────────────────────────────────────────────────
const ITEM_TYPES = ["prem", "rampup", "main", "rampdown", "postm"];

export const ITEM_TYPE_STYLES = {
  prem: { label: "Pre-Main", background: "#90A4AE" },
  rampup: { label: "Ramp Up", background: "#66BB6A" },
  main: { label: "Main", background: "#1976D2" },
  rampdown: { label: "Ramp Down", background: "#EF5350" },
  postm: { label: "Post-Main", background: "#AB47BC" },
};

// ─── Datos de ejemplo con jerarquía Faena / Zona / Equipo ──────────────────
const FAENAS = ["Faena Norte", "Faena Sur"];
const ZONAS = ["Zona A", "Zona B", "Zona C"];
const EQUIPOS = ["Excavadora 1", "Excavadora 2", "Camión 1", "Camión 2"];

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
  const items = [];
  let id = 1;
  for (const group of groups) {
    const count = group.level === 0 ? 1 : group.level === 1 ? 2 : 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const startOffset = Math.floor(Math.random() * 30) - 10;
      const duration = 1 + Math.floor(Math.random() * 7);
      const itemType = ITEM_TYPES[id % ITEM_TYPES.length];
      items.push({
        id: id++,
        group: group.id,
        title: `Tarea ${id}`,
        start_time: dayjs().add(startOffset, "day").valueOf(),
        end_time: dayjs()
          .add(startOffset + duration, "day")
          .valueOf(),
        itemType,
        showMenu: id % 3 === 0,
      });
    }
  }
  return items;
}

const ALL_GROUPS = buildGroups();
const ALL_ITEMS = buildItems(ALL_GROUPS);

const FAENA_W = 130;
const ZONA_W = 100;
const EQUIPO_W = 130;
const LINE_HEIGHT = 36;
const ANIM_MS = 240;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

function ItemMenu({ item, menuOptions, onMenuAction }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleClick = (e) => {
    e.stopPropagation();
    const rect = btnRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 4, left: rect.left + rect.width / 2 });
    setOpen((v) => !v);
  };

  return (
    <div
      ref={btnRef}
      style={{ position: "relative", flexShrink: 0 }}
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={handleClick}
    >
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          fontSize: 13,
          lineHeight: 1,
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        ⋮
      </div>
      {open &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              transform: "translateX(-50%)",
              zIndex: 99999,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: 4,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              minWidth: 140,
              color: "#333",
              fontSize: 12,
            }}
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {menuOptions.map((opt) => (
              <div
                key={opt.id}
                style={{ padding: "7px 14px", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                  onMenuAction && onMenuAction({ itemId: item.id, item, optionId: opt.id, optionLabel: opt.label });
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}

function ItemTypeLegend() {
  return (
    <div
      style={{ display: "flex", gap: 12, padding: "6px 8px", flexWrap: "wrap", fontFamily: "sans-serif", fontSize: 12 }}
    >
      {ITEM_TYPES.map((type) => {
        const s = ITEM_TYPE_STYLES[type];
        return (
          <div key={type} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div
              style={{
                width: 28,
                height: 16,
                background: s.background,
                borderRadius: 3,
                borderLeft: s.borderLeft,
              }}
            />
            <span style={{ color: "#333" }}>{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        flexShrink: 0,
        transition: "transform 0.22s ease",
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
      }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    const openFaenas = {};
    ALL_GROUPS.filter((g) => g.level === 0).forEach((g) => {
      openFaenas[g.id] = true;
    });
    this.state = {
      openFaenas,
      openZonas: {},
      animHeights: {},
      useWeeks: true,
      items: [...ALL_ITEMS],
      lastAction: null,
    };
  }

  _animFrames = {};

  componentWillUnmount() {
    Object.values(this._animFrames).forEach(cancelAnimationFrame);
  }

  // ─── Animation helpers (rAF-based so items below also follow) ────────────

  _collapseRows(ids) {
    ids.forEach((id) => {
      if (this._animFrames[id]) cancelAnimationFrame(this._animFrames[id]);
    });
    const startHeights = Object.fromEntries(ids.map((id) => [id, this.state.animHeights[id] ?? LINE_HEIGHT]));
    const startTime = performance.now();

    const tick = (now) => {
      const t = Math.min((now - startTime) / ANIM_MS, 1);
      const heights = Object.fromEntries(ids.map((id) => [id, Math.round(startHeights[id] * (1 - easeInOut(t)))]));
      this.setState((p) => ({ animHeights: { ...p.animHeights, ...heights } }));

      if (t < 1) {
        const fid = requestAnimationFrame(tick);
        ids.forEach((id) => (this._animFrames[id] = fid));
      } else {
        ids.forEach((id) => delete this._animFrames[id]);
        this.setState((p) => {
          const next = { ...p.animHeights };
          ids.forEach((id) => delete next[id]);
          return { animHeights: next };
        });
      }
    };
    const fid = requestAnimationFrame(tick);
    ids.forEach((id) => (this._animFrames[id] = fid));
  }

  _expandRows(ids) {
    ids.forEach((id) => {
      if (this._animFrames[id]) cancelAnimationFrame(this._animFrames[id]);
    });
    const startTime = performance.now();

    this.setState(
      (p) => ({ animHeights: { ...p.animHeights, ...Object.fromEntries(ids.map((id) => [id, 0])) } }),
      () => {
        const tick = (now) => {
          const t = Math.min((now - startTime) / ANIM_MS, 1);
          const heights = Object.fromEntries(ids.map((id) => [id, Math.round(LINE_HEIGHT * easeInOut(t))]));
          this.setState((p) => ({ animHeights: { ...p.animHeights, ...heights } }));

          if (t < 1) {
            const fid = requestAnimationFrame(tick);
            ids.forEach((id) => (this._animFrames[id] = fid));
          } else {
            ids.forEach((id) => delete this._animFrames[id]);
            this.setState((p) => {
              const next = { ...p.animHeights };
              ids.forEach((id) => delete next[id]);
              return { animHeights: next };
            });
          }
        };
        const fid = requestAnimationFrame(tick);
        ids.forEach((id) => (this._animFrames[id] = fid));
      }
    );
  }

  // ─── Toggle handlers ─────────────────────────────────────────────────────

  toggleFaena = (faenaId) => {
    const { openFaenas, openZonas } = this.state;
    if (openFaenas[faenaId]) {
      const zonaIds = ALL_GROUPS.filter((g) => g.level === 1 && g.parent === faenaId).map((g) => g.id);
      const equipoIds = ALL_GROUPS.filter((g) => g.level === 2 && openZonas[g.parent])
        .filter((g) => ALL_GROUPS.find((z) => z.id === g.parent)?.parent === faenaId)
        .map((g) => g.id);
      this.setState((p) => ({ openFaenas: { ...p.openFaenas, [faenaId]: false } }));
      this._collapseRows([...zonaIds, ...equipoIds]);
    } else {
      const zonaIds = ALL_GROUPS.filter((g) => g.level === 1 && g.parent === faenaId).map((g) => g.id);
      this.setState((p) => ({ openFaenas: { ...p.openFaenas, [faenaId]: true } }));
      this._expandRows(zonaIds);
    }
  };

  toggleZona = (zonaId) => {
    const { openZonas } = this.state;
    const equipoIds = ALL_GROUPS.filter((g) => g.level === 2 && g.parent === zonaId).map((g) => g.id);
    if (openZonas[zonaId]) {
      this.setState((p) => ({ openZonas: { ...p.openZonas, [zonaId]: false } }));
      this._collapseRows(equipoIds);
    } else {
      this.setState((p) => ({ openZonas: { ...p.openZonas, [zonaId]: true } }));
      this._expandRows(equipoIds);
    }
  };

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { openFaenas, openZonas, animHeights, items } = this.state;
    const visibleGroups = ALL_GROUPS.filter((g) => {
      if (g.level === 0) return true;
      if (g.level === 1) return !!openFaenas[g.parent] || g.id in animHeights;
      const zona = ALL_GROUPS.find((z) => z.id === g.parent);
      return (!!openFaenas[zona?.parent] && !!openZonas[g.parent]) || g.id in animHeights;
    });
    const newGroup = visibleGroups[newGroupOrder];
    this.setState({
      items: items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              start_time: dragTime,
              end_time: dragTime + (item.end_time - item.start_time),
              group: newGroup.id,
            }
          : item
      ),
    });
  };

  handleItemResize = (itemId, time, edge) => {
    this.setState((prev) => ({
      items: prev.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              start_time: edge === "left" ? time : item.start_time,
              end_time: edge === "left" ? item.end_time : time,
            }
          : item
      ),
    }));
  };

  handleTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
    if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
      updateScrollCanvas(minTime, maxTime);
    } else if (visibleTimeStart < minTime) {
      updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart));
    } else if (visibleTimeEnd > maxTime) {
      updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime);
    } else {
      updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
    }
  };

  handleMenuAction = (action) => {
    // action = { itemId, item, optionId, optionLabel }
    // En Dash: aquí se dispararía el callback con estos datos
    this.setState({ lastAction: action });
  };

  // Opciones del menú — en Dash se pasarían como prop desde Python
  menuOptions = [
    { id: "detail", label: "Ver detalle" },
    { id: "edit", label: "Editar" },
    { id: "duplicate", label: "Duplicar" },
    { id: "delete", label: "Eliminar" },
  ];

  render() {
    const { openFaenas, openZonas, animHeights, useWeeks, items, lastAction } = this.state;

    const visibleGroups = ALL_GROUPS.filter((g) => {
      if (g.level === 0) return true;
      if (g.level === 1) return !!openFaenas[g.parent] || g.id in animHeights;
      const zona = ALL_GROUPS.find((z) => z.id === g.parent);
      return (!!openFaenas[zona?.parent] && !!openZonas[g.parent]) || g.id in animHeights;
    }).map((g) => ({ ...g, height: g.id in animHeights ? animHeights[g.id] : undefined }));

    const visibleIds = new Set(visibleGroups.map((g) => g.id));
    const visibleItems = items.filter((item) => visibleIds.has(item.group) && !(item.group in animHeights));

    const sidebarColumns = [
      {
        id: "faena",
        title: "Faena",
        width: FAENA_W,
        renderCell: (group) => {
          if (group.level !== 0) return null;
          return (
            <span
              onClick={() => this.toggleFaena(group.id)}
              style={{
                cursor: "pointer",
                userSelect: "none",
                fontWeight: "bold",
                width: "100%",
                paddingLeft: 4,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Chevron open={!!openFaenas[group.id]} />
              {group.faena}
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
          return (
            <span
              onClick={() => this.toggleZona(group.id)}
              style={{
                cursor: "pointer",
                userSelect: "none",
                paddingLeft: 4,
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Chevron open={!!openZonas[group.id]} />
              {group.zona}
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
          return <span style={{ paddingLeft: 12 }}>{group.equipo}</span>;
        },
      },
    ];

    return (
      <div>
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            margin: "8px 0 4px 8px",
            fontFamily: "sans-serif",
            fontSize: 14,
          }}
        >
          <input
            type="checkbox"
            checked={useWeeks}
            onChange={(e) => this.setState({ useWeeks: e.target.checked })}
            style={{ width: 16, height: 16 }}
          />
          Usar semanas (año → semana → día → hora)
        </label>
        <ItemTypeLegend />
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
          defaultTimeStart={dayjs().startOf("week").subtract(1, "week").valueOf()}
          defaultTimeEnd={dayjs().startOf("week").add(5, "week").valueOf()}
          stackItems
          canMove
          canResize="both"
          canSelect
          useResizeHandle
          itemTouchSendsClick={false}
          itemHeightRatio={1}
          lineHeight={LINE_HEIGHT}
          useWeeks={useWeeks}
          onTimeChange={this.handleTimeChange}
          onItemMove={this.handleItemMove}
          onItemResize={this.handleItemResize}
          buffer={3}
          minZoom={60 * 60 * 1000}
          maxZoom={365 * 24 * 86400 * 1000 * 20}
          itemRenderer={({ item, itemContext, getItemProps, getResizeProps }) => {
            const ts = ITEM_TYPE_STYLES[item.itemType] || ITEM_TYPE_STYLES.main;
            const selected = itemContext.selected;
            const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
            return (
              <div
                {...getItemProps({
                  style: {
                    background: ts.background,
                    filter: selected ? "brightness(0.75)" : "none",
                    border: `1px solid ${selected ? "#555" : "#999"}`,
                    borderRadius: 0,
                    color: "#fff",
                    fontSize: 12,
                    overflow: "hidden",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "stretch",
                  },
                })}
              >
                {leftResizeProps && <div {...leftResizeProps} />}
                <div
                  className="rct-item-content"
                  style={{
                    maxHeight: itemContext.dimensions.height,
                    overflow: "visible",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    gap: 4,
                  }}
                >
                  {Math.round((item.end_time - item.start_time) / (1000 * 60 * 60))} h
                  {item.showMenu && (
                    <ItemMenu item={item} menuOptions={this.menuOptions} onMenuAction={this.handleMenuAction} />
                  )}
                </div>
                {rightResizeProps && <div {...rightResizeProps} />}
              </div>
            );
          }}
        >
          <TimelineMarkers>
            <TodayMarker />
            <CursorMarker />
          </TimelineMarkers>
        </Timeline>
        {lastAction && (
          <div
            style={{
              marginTop: 8,
              padding: "6px 10px",
              background: "#f5f5f5",
              border: "1px solid #ddd",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: "monospace",
            }}
          >
            <strong>Último evento:</strong> opción <em>{lastAction.optionLabel}</em> ({lastAction.optionId}) en ítem #
            {lastAction.itemId} &mdash; tipo: {lastAction.item.itemType}
          </div>
        )}
      </div>
    );
  }
}
