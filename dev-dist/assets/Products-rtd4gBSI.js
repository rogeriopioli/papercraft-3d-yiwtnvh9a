import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import "./es2015-2BKVf0y2.js";
import { t as LoaderCircle } from "./loader-circle-Ceb7piMS.js";
import { t as SquarePen } from "./square-pen-7VSc2wTx.js";
import { F as useProductStore, V as Button, Z as Trash2, ct as Link, tt as Plus } from "./index-Ce5mAATO.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C_v99A__.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-YT7EK1Cn.js";
//#region src/pages/admin/Products.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdminProducts() {
	const { products, deleteProduct, isLoading } = useProductStore();
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	const { toast } = useToast();
	const confirmDelete = async () => {
		if (deleteId) {
			setIsDeleting(true);
			try {
				await deleteProduct(deleteId);
				toast({
					title: "Produto removido",
					description: "O produto foi excluído do catálogo permanentemente."
				});
				setDeleteId(null);
			} catch (err) {
				toast({
					title: "Erro ao remover",
					description: "Não foi possível excluir o produto.",
					variant: "destructive"
				});
			} finally {
				setIsDeleting(false);
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Products.tsx:54:5",
		"data-prohibitions": "[editContent]",
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/Products.tsx:55:7",
				"data-prohibitions": "[]",
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/Products.tsx:56:9",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/admin/Products.tsx:57:11",
						"data-prohibitions": "[]",
						className: "text-3xl font-heading font-bold mb-1",
						children: "Catálogo de Produtos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/admin/Products.tsx:58:11",
						"data-prohibitions": "[]",
						className: "text-muted-foreground",
						children: "Gerencie os modelos 3D disponíveis na loja."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/admin/Products.tsx:60:9",
					"data-prohibitions": "[]",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						"data-uid": "src/pages/admin/Products.tsx:61:11",
						"data-prohibitions": "[]",
						to: "/admin/product/new",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							"data-uid": "src/pages/admin/Products.tsx:62:13",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 mr-2"
						}), "Novo Produto"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/admin/Products.tsx:68:7",
				"data-prohibitions": "[editContent]",
				className: "bg-card rounded-xl border shadow-subtle overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/admin/Products.tsx:69:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/admin/Products.tsx:70:11",
						"data-prohibitions": "[]",
						className: "bg-muted/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Products.tsx:71:13",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Products.tsx:72:15",
									"data-prohibitions": "[]",
									children: "Produto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Products.tsx:73:15",
									"data-prohibitions": "[]",
									className: "hidden sm:table-cell",
									children: "Categoria"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Products.tsx:74:15",
									"data-prohibitions": "[]",
									children: "Preço"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									"data-uid": "src/pages/admin/Products.tsx:75:15",
									"data-prohibitions": "[]",
									className: "text-right",
									children: "Ações"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						"data-uid": "src/pages/admin/Products.tsx:78:11",
						"data-prohibitions": "[editContent]",
						children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
							"data-uid": "src/pages/admin/Products.tsx:80:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Products.tsx:81:17",
								"data-prohibitions": "[]",
								colSpan: 4,
								className: "text-center py-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/admin/Products.tsx:82:19",
									"data-prohibitions": "[editContent]",
									className: "w-6 h-6 animate-spin mx-auto text-muted-foreground"
								})
							})
						}) : products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
							"data-uid": "src/pages/admin/Products.tsx:86:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Products.tsx:87:17",
								"data-prohibitions": "[]",
								colSpan: 4,
								className: "text-center py-12 text-muted-foreground",
								children: "Nenhum produto cadastrado no momento."
							})
						}) : products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Products.tsx:93:17",
							"data-prohibitions": "[editContent]",
							className: "group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Products.tsx:94:19",
									"data-prohibitions": "[editContent]",
									className: "font-medium",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Products.tsx:95:21",
										"data-prohibitions": "[editContent]",
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"data-uid": "src/pages/admin/Products.tsx:96:23",
											"data-prohibitions": "[]",
											className: "w-12 h-12 rounded-md overflow-hidden bg-muted shrink-0 border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												"data-uid": "src/pages/admin/Products.tsx:97:25",
												"data-prohibitions": "[editContent]",
												src: product.images[0],
												alt: product.title,
												className: "w-full h-full object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/admin/Products.tsx:103:23",
											"data-prohibitions": "[editContent]",
											className: "line-clamp-2",
											children: product.title
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Products.tsx:106:19",
									"data-prohibitions": "[editContent]",
									className: "hidden sm:table-cell",
									children: product.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									"data-uid": "src/pages/admin/Products.tsx:107:19",
									"data-prohibitions": "[editContent]",
									className: "whitespace-nowrap",
									children: ["R$ ", product.price.toFixed(2).replace(".", ",")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									"data-uid": "src/pages/admin/Products.tsx:110:19",
									"data-prohibitions": "[]",
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/Products.tsx:111:21",
										"data-prohibitions": "[]",
										className: "flex justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/admin/Products.tsx:112:23",
											"data-prohibitions": "[]",
											variant: "secondary",
											size: "icon",
											className: "h-8 w-8",
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												"data-uid": "src/pages/admin/Products.tsx:113:25",
												"data-prohibitions": "[]",
												to: `/admin/product/${product.id}`,
												title: "Editar",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, {
													"data-uid": "src/pages/admin/Products.tsx:114:27",
													"data-prohibitions": "[editContent]",
													className: "w-4 h-4"
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/admin/Products.tsx:117:23",
											"data-prohibitions": "[]",
											variant: "destructive",
											size: "icon",
											className: "h-8 w-8",
											onClick: () => setDeleteId(product.id),
											title: "Excluir",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
												"data-uid": "src/pages/admin/Products.tsx:124:25",
												"data-prohibitions": "[editContent]",
												className: "w-4 h-4"
											})
										})]
									})
								})
							]
						}, product.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				"data-uid": "src/pages/admin/Products.tsx:135:7",
				"data-prohibitions": "[editContent]",
				open: !!deleteId,
				onOpenChange: (open) => !open && setDeleteId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					"data-uid": "src/pages/admin/Products.tsx:136:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, {
						"data-uid": "src/pages/admin/Products.tsx:137:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
							"data-uid": "src/pages/admin/Products.tsx:138:13",
							"data-prohibitions": "[]",
							children: "Excluir produto?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
							"data-uid": "src/pages/admin/Products.tsx:139:13",
							"data-prohibitions": "[]",
							children: "Esta ação não pode ser desfeita. Isso removerá o produto do catálogo permanentemente."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, {
						"data-uid": "src/pages/admin/Products.tsx:143:11",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
							"data-uid": "src/pages/admin/Products.tsx:144:13",
							"data-prohibitions": "[]",
							disabled: isDeleting,
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/pages/admin/Products.tsx:145:13",
							"data-prohibitions": "[editContent]",
							variant: "destructive",
							onClick: confirmDelete,
							disabled: isDeleting,
							children: [isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								"data-uid": "src/pages/admin/Products.tsx:146:29",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 animate-spin mr-2"
							}) : null, "Sim, Excluir"]
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { AdminProducts as default };

//# sourceMappingURL=Products-rtd4gBSI.js.map