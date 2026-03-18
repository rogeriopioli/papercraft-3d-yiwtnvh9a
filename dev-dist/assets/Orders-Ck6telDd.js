import { t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import { B as Badge, r as useOrderStore } from "./index-Ce5mAATO.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C_v99A__.js";
//#region src/pages/admin/Orders.tsx
var import_jsx_runtime = require_jsx_runtime();
function AdminOrders() {
	const { orders } = useOrderStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Orders.tsx:16:5",
		"data-prohibitions": "[editContent]",
		className: "animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/Orders.tsx:17:7",
			"data-prohibitions": "[]",
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/admin/Orders.tsx:18:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-heading font-bold mb-1",
				children: "Pedidos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/admin/Orders.tsx:19:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground",
				children: "Gerencie as compras dos clientes na loja."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/admin/Orders.tsx:22:7",
			"data-prohibitions": "[editContent]",
			className: "bg-card rounded-xl border shadow-subtle overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
				"data-uid": "src/pages/admin/Orders.tsx:23:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-uid": "src/pages/admin/Orders.tsx:24:11",
					"data-prohibitions": "[]",
					className: "bg-muted/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						"data-uid": "src/pages/admin/Orders.tsx:25:13",
						"data-prohibitions": "[]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Orders.tsx:26:15",
								"data-prohibitions": "[]",
								children: "ID Pedido"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Orders.tsx:27:15",
								"data-prohibitions": "[]",
								children: "Data"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Orders.tsx:28:15",
								"data-prohibitions": "[]",
								children: "Cliente (E-mail)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Orders.tsx:29:15",
								"data-prohibitions": "[]",
								children: "Itens Comprados"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Orders.tsx:30:15",
								"data-prohibitions": "[]",
								children: "Cupom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Orders.tsx:31:15",
								"data-prohibitions": "[]",
								className: "text-right",
								children: "Total"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-uid": "src/pages/admin/Orders.tsx:34:11",
					"data-prohibitions": "[editContent]",
					children: orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
						"data-uid": "src/pages/admin/Orders.tsx:36:15",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							"data-uid": "src/pages/admin/Orders.tsx:37:17",
							"data-prohibitions": "[]",
							colSpan: 6,
							className: "text-center py-12 text-muted-foreground",
							children: "Nenhum pedido encontrado."
						})
					}) : orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						"data-uid": "src/pages/admin/Orders.tsx:43:17",
						"data-prohibitions": "[editContent]",
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Orders.tsx:44:19",
								"data-prohibitions": "[editContent]",
								className: "font-medium",
								children: order.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Orders.tsx:45:19",
								"data-prohibitions": "[editContent]",
								className: "whitespace-nowrap",
								children: new Date(order.date).toLocaleDateString("pt-BR")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Orders.tsx:48:19",
								"data-prohibitions": "[editContent]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/Orders.tsx:49:21",
									"data-prohibitions": "[editContent]",
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-uid": "src/pages/admin/Orders.tsx:50:23",
										"data-prohibitions": "[editContent]",
										className: "font-medium text-sm text-foreground",
										children: order.customerName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-uid": "src/pages/admin/Orders.tsx:53:23",
										"data-prohibitions": "[editContent]",
										className: "text-xs text-muted-foreground",
										children: order.customerEmail
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Orders.tsx:56:19",
								"data-prohibitions": "[editContent]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"data-uid": "src/pages/admin/Orders.tsx:57:21",
									"data-prohibitions": "[editContent]",
									className: "text-sm space-y-1",
									children: order.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Orders.tsx:59:25",
										"data-prohibitions": "[editContent]",
										className: "truncate max-w-[200px] xl:max-w-[300px]",
										title: item.title,
										children: [
											item.quantity,
											"x ",
											item.title
										]
									}, idx))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Orders.tsx:69:19",
								"data-prohibitions": "[editContent]",
								children: order.couponApplied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/pages/admin/Orders.tsx:71:23",
									"data-prohibitions": "[editContent]",
									variant: "secondary",
									className: "font-mono text-xs",
									children: order.couponApplied
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/admin/Orders.tsx:75:23",
									"data-prohibitions": "[]",
									className: "text-muted-foreground text-xs",
									children: "-"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								"data-uid": "src/pages/admin/Orders.tsx:78:19",
								"data-prohibitions": "[editContent]",
								className: "text-right font-bold text-primary",
								children: ["R$ ", order.total.toFixed(2).replace(".", ",")]
							})
						]
					}, order.id))
				})]
			})
		})]
	});
}
//#endregion
export { AdminOrders as default };

//# sourceMappingURL=Orders-Ck6telDd.js.map