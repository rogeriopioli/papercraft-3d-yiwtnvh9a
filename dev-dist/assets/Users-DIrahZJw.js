import { t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import { B as Badge, c as Card, d as CardHeader, f as CardTitle, l as CardContent, n as useAdminUserStore } from "./index-Ce5mAATO.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C_v99A__.js";
//#region src/pages/admin/Users.tsx
var import_jsx_runtime = require_jsx_runtime();
function AdminUsers() {
	const { users } = useAdminUserStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Users.tsx:17:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 animate-fade-in relative z-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Users.tsx:18:7",
			"data-prohibitions": "[]",
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/admin/Users.tsx:19:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-heading font-bold mb-1",
				children: "Clientes e Segmentação"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/admin/Users.tsx:20:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground",
				children: "Gerencie seus clientes e visualize suas tags e histórico."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/admin/Users.tsx:25:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/admin/Users.tsx:26:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/admin/Users.tsx:27:11",
					"data-prohibitions": "[]",
					children: "Usuários Cadastrados"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/admin/Users.tsx:29:9",
				"data-prohibitions": "[editContent]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/admin/Users.tsx:30:11",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/admin/Users.tsx:31:13",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Users.tsx:32:15",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Users.tsx:33:17",
									"data-prohibitions": "[]",
									children: "Nome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Users.tsx:34:17",
									"data-prohibitions": "[]",
									children: "E-mail"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Users.tsx:35:17",
									"data-prohibitions": "[]",
									children: "Tags / Segmentação"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Users.tsx:36:17",
									"data-prohibitions": "[]",
									className: "text-right",
									children: "Downloads Restantes"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, {
						"data-uid": "src/pages/admin/Users.tsx:39:13",
						"data-prohibitions": "[editContent]",
						children: [users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Users.tsx:41:17",
							"data-prohibitions": "[editContent]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Users.tsx:42:19",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: user.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Users.tsx:43:19",
									"data-prohibitions": "[editContent]",
									children: user.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Users.tsx:44:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Users.tsx:45:21",
										"data-prohibitions": "[editContent]",
										className: "flex gap-2 flex-wrap",
										children: [user.tags?.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											"data-uid": "src/pages/admin/Users.tsx:47:25",
											"data-prohibitions": "[editContent]",
											variant: "secondary",
											className: "bg-primary/10 text-primary hover:bg-primary/20",
											children: tag
										}, tag)), (!user.tags || user.tags.length === 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/admin/Users.tsx:56:25",
											"data-prohibitions": "[]",
											className: "text-muted-foreground text-xs italic",
											children: "Sem tags"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									"data-uid": "src/pages/admin/Users.tsx:60:19",
									"data-prohibitions": "[editContent]",
									className: "text-right",
									children: [
										Math.max(0, user.downloadLimit - user.totalDownloads),
										" / ",
										user.downloadLimit
									]
								})
							]
						}, user.id)), users.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
							"data-uid": "src/pages/admin/Users.tsx:66:17",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Users.tsx:67:19",
								"data-prohibitions": "[]",
								colSpan: 4,
								className: "text-center py-6 text-muted-foreground",
								children: "Nenhum usuário encontrado."
							})
						})]
					})]
				})
			})]
		})]
	});
}
//#endregion
export { AdminUsers as default };

//# sourceMappingURL=Users-DIrahZJw.js.map