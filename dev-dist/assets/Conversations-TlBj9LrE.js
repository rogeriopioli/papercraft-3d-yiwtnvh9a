import { t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { V as Button, X as User, at as Bot, c as Card, d as CardHeader, l as CardContent, o as useChatStore } from "./index-Ce5mAATO.js";
var Calendar = createLucideIcon("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]);
//#endregion
//#region src/pages/admin/Conversations.tsx
var import_jsx_runtime = require_jsx_runtime();
function AdminConversations() {
	const { logs, clearLogs } = useChatStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Conversations.tsx:10:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 max-w-5xl animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Conversations.tsx:11:7",
			"data-prohibitions": "[editContent]",
			className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/admin/Conversations.tsx:12:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Histórico de Conversas da IA"
			}), logs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/admin/Conversations.tsx:14:11",
				"data-prohibitions": "[]",
				variant: "outline",
				onClick: clearLogs,
				className: "text-destructive hover:bg-destructive/10",
				children: "Limpar Histórico"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/admin/Conversations.tsx:24:7",
			"data-prohibitions": "[editContent]",
			className: "grid gap-4",
			children: logs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				"data-uid": "src/pages/admin/Conversations.tsx:26:11",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					"data-uid": "src/pages/admin/Conversations.tsx:27:13",
					"data-prohibitions": "[]",
					className: "p-8 text-center text-muted-foreground",
					children: "Nenhuma conversa registrada ainda."
				})
			}) : logs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/admin/Conversations.tsx:33:13",
				"data-prohibitions": "[editContent]",
				className: "overflow-hidden shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					"data-uid": "src/pages/admin/Conversations.tsx:34:15",
					"data-prohibitions": "[editContent]",
					className: "bg-muted/50 p-4 border-b",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Conversations.tsx:35:17",
						"data-prohibitions": "[editContent]",
						className: "flex items-center gap-2 text-sm text-muted-foreground font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
							"data-uid": "src/pages/admin/Conversations.tsx:36:19",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4"
						}), new Date(log.date).toLocaleString("pt-BR")]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					"data-uid": "src/pages/admin/Conversations.tsx:40:15",
					"data-prohibitions": "[editContent]",
					className: "p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/admin/Conversations.tsx:41:17",
						"data-prohibitions": "[editContent]",
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/Conversations.tsx:42:19",
							"data-prohibitions": "[editContent]",
							className: "p-4 bg-background border-b flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/pages/admin/Conversations.tsx:43:21",
								"data-prohibitions": "[]",
								className: "w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
									"data-uid": "src/pages/admin/Conversations.tsx:44:23",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/Conversations.tsx:46:21",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/admin/Conversations.tsx:47:23",
									"data-prohibitions": "[]",
									className: "text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider",
									children: "Usuário"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/admin/Conversations.tsx:50:23",
									"data-prohibitions": "[editContent]",
									className: "text-sm font-medium",
									children: log.query
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/Conversations.tsx:53:19",
							"data-prohibitions": "[editContent]",
							className: "p-4 bg-muted/30 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/pages/admin/Conversations.tsx:54:21",
								"data-prohibitions": "[]",
								className: "w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
									"data-uid": "src/pages/admin/Conversations.tsx:55:23",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/admin/Conversations.tsx:57:21",
								"data-prohibitions": "[editContent]",
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/admin/Conversations.tsx:58:23",
									"data-prohibitions": "[]",
									className: "text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider",
									children: "Assistente IA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/admin/Conversations.tsx:61:23",
									"data-prohibitions": "[editContent]",
									className: "text-sm whitespace-pre-wrap leading-relaxed",
									children: log.response
								})]
							})]
						})]
					})
				})]
			}, log.id))
		})]
	});
}
//#endregion
export { AdminConversations as default };

//# sourceMappingURL=Conversations-TlBj9LrE.js.map