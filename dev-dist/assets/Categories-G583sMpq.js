import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import "./es2015-2BKVf0y2.js";
import { t as LoaderCircle } from "./loader-circle-Ceb7piMS.js";
import { t as SquarePen } from "./square-pen-7VSc2wTx.js";
import { V as Button, Z as Trash2, i as useCategoryStore, tt as Plus, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C_v99A__.js";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-DJhwZFs-.js";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-YT7EK1Cn.js";
//#region src/pages/admin/Categories.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Categories() {
	const { categories, addCategory, updateCategory, deleteCategory, isLoading } = useCategoryStore();
	const [isAddOpen, setIsAddOpen] = (0, import_react.useState)(false);
	const [editCategory, setEditCategory] = (0, import_react.useState)(null);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const { toast } = useToast();
	const handleAdd = async (e) => {
		e.preventDefault();
		if (!name.trim()) return;
		setIsSubmitting(true);
		try {
			await addCategory(name.trim());
			setName("");
			setIsAddOpen(false);
			toast({ title: "Categoria adicionada com sucesso!" });
		} catch (err) {
			toast({
				title: "Erro ao adicionar categoria",
				variant: "destructive"
			});
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleEdit = async (e) => {
		e.preventDefault();
		if (!editCategory || !editCategory.name.trim()) return;
		setIsSubmitting(true);
		try {
			await updateCategory(editCategory.id, editCategory.name.trim());
			setEditCategory(null);
			toast({ title: "Categoria atualizada com sucesso!" });
		} catch (err) {
			toast({
				title: "Erro ao atualizar categoria",
				variant: "destructive"
			});
		} finally {
			setIsSubmitting(false);
		}
	};
	const confirmDelete = async () => {
		if (deleteId) {
			setIsSubmitting(true);
			try {
				await deleteCategory(deleteId);
				setDeleteId(null);
				toast({ title: "Categoria removida com sucesso!" });
			} catch (err) {
				toast({
					title: "Erro ao remover categoria",
					variant: "destructive"
				});
			} finally {
				setIsSubmitting(false);
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/Categories.tsx:90:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-4xl animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/Categories.tsx:91:7",
				"data-prohibitions": "[]",
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/admin/Categories.tsx:92:9",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/admin/Categories.tsx:93:11",
						"data-prohibitions": "[]",
						className: "text-3xl font-heading font-bold mb-1",
						children: "Categorias"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/admin/Categories.tsx:94:11",
						"data-prohibitions": "[]",
						className: "text-muted-foreground",
						children: "Gerencie as categorias de produtos."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					"data-uid": "src/pages/admin/Categories.tsx:96:9",
					"data-prohibitions": "[]",
					onClick: () => setIsAddOpen(true),
					className: "w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						"data-uid": "src/pages/admin/Categories.tsx:97:11",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mr-2"
					}), "Nova Categoria"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/admin/Categories.tsx:102:7",
				"data-prohibitions": "[editContent]",
				className: "bg-card rounded-xl border shadow-subtle overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
					"data-uid": "src/pages/admin/Categories.tsx:103:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						"data-uid": "src/pages/admin/Categories.tsx:104:11",
						"data-prohibitions": "[]",
						className: "bg-muted/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Categories.tsx:105:13",
							"data-prohibitions": "[]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Categories.tsx:106:15",
								"data-prohibitions": "[]",
								children: "Nome da Categoria"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/pages/admin/Categories.tsx:107:15",
								"data-prohibitions": "[]",
								className: "text-right",
								children: "Ações"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
						"data-uid": "src/pages/admin/Categories.tsx:110:11",
						"data-prohibitions": "[editContent]",
						children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
							"data-uid": "src/pages/admin/Categories.tsx:112:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Categories.tsx:113:17",
								"data-prohibitions": "[]",
								colSpan: 2,
								className: "text-center py-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/admin/Categories.tsx:114:19",
									"data-prohibitions": "[editContent]",
									className: "w-6 h-6 animate-spin mx-auto text-muted-foreground"
								})
							})
						}) : categories.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
							"data-uid": "src/pages/admin/Categories.tsx:118:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Categories.tsx:119:17",
								"data-prohibitions": "[]",
								colSpan: 2,
								className: "text-center py-12 text-muted-foreground",
								children: "Nenhuma categoria cadastrada."
							})
						}) : categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							"data-uid": "src/pages/admin/Categories.tsx:125:17",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Categories.tsx:126:19",
								"data-prohibitions": "[editContent]",
								className: "font-medium",
								children: cat.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/pages/admin/Categories.tsx:127:19",
								"data-prohibitions": "[]",
								className: "text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/Categories.tsx:128:21",
									"data-prohibitions": "[]",
									className: "flex justify-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/pages/admin/Categories.tsx:129:23",
										"data-prohibitions": "[]",
										variant: "secondary",
										size: "icon",
										className: "h-8 w-8",
										onClick: () => setEditCategory(cat),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, {
											"data-uid": "src/pages/admin/Categories.tsx:135:25",
											"data-prohibitions": "[editContent]",
											className: "w-4 h-4"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/pages/admin/Categories.tsx:137:23",
										"data-prohibitions": "[]",
										variant: "destructive",
										size: "icon",
										className: "h-8 w-8",
										onClick: () => setDeleteId(cat.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											"data-uid": "src/pages/admin/Categories.tsx:143:25",
											"data-prohibitions": "[editContent]",
											className: "w-4 h-4"
										})
									})]
								})
							})]
						}, cat.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				"data-uid": "src/pages/admin/Categories.tsx:154:7",
				"data-prohibitions": "[editContent]",
				open: isAddOpen,
				onOpenChange: setIsAddOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					"data-uid": "src/pages/admin/Categories.tsx:155:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
						"data-uid": "src/pages/admin/Categories.tsx:156:11",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							"data-uid": "src/pages/admin/Categories.tsx:157:13",
							"data-prohibitions": "[]",
							children: "Nova Categoria"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						"data-uid": "src/pages/admin/Categories.tsx:159:11",
						"data-prohibitions": "[editContent]",
						onSubmit: handleAdd,
						className: "space-y-4 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/Categories.tsx:160:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/admin/Categories.tsx:161:15",
								"data-prohibitions": "[]",
								htmlFor: "cat-name",
								children: "Nome da categoria"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/admin/Categories.tsx:162:15",
								"data-prohibitions": "[editContent]",
								id: "cat-name",
								value: name,
								onChange: (e) => setName(e.target.value),
								required: true,
								autoFocus: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							"data-uid": "src/pages/admin/Categories.tsx:170:13",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/admin/Categories.tsx:171:15",
								"data-prohibitions": "[]",
								type: "button",
								variant: "outline",
								onClick: () => setIsAddOpen(false),
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								"data-uid": "src/pages/admin/Categories.tsx:174:15",
								"data-prohibitions": "[editContent]",
								type: "submit",
								disabled: isSubmitting,
								children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/admin/Categories.tsx:175:33",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 animate-spin mr-2"
								}) : null, "Salvar"]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				"data-uid": "src/pages/admin/Categories.tsx:183:7",
				"data-prohibitions": "[editContent]",
				open: !!editCategory,
				onOpenChange: (open) => !open && setEditCategory(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					"data-uid": "src/pages/admin/Categories.tsx:184:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
						"data-uid": "src/pages/admin/Categories.tsx:185:11",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							"data-uid": "src/pages/admin/Categories.tsx:186:13",
							"data-prohibitions": "[]",
							children: "Editar Categoria"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						"data-uid": "src/pages/admin/Categories.tsx:188:11",
						"data-prohibitions": "[editContent]",
						onSubmit: handleEdit,
						className: "space-y-4 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/Categories.tsx:189:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/admin/Categories.tsx:190:15",
								"data-prohibitions": "[]",
								htmlFor: "edit-name",
								children: "Nome da categoria"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/admin/Categories.tsx:191:15",
								"data-prohibitions": "[editContent]",
								id: "edit-name",
								value: editCategory?.name || "",
								onChange: (e) => setEditCategory((prev) => prev ? {
									...prev,
									name: e.target.value
								} : null),
								required: true,
								autoFocus: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							"data-uid": "src/pages/admin/Categories.tsx:201:13",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/admin/Categories.tsx:202:15",
								"data-prohibitions": "[]",
								type: "button",
								variant: "outline",
								onClick: () => setEditCategory(null),
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								"data-uid": "src/pages/admin/Categories.tsx:205:15",
								"data-prohibitions": "[editContent]",
								type: "submit",
								disabled: isSubmitting,
								children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/admin/Categories.tsx:206:33",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 animate-spin mr-2"
								}) : null, "Atualizar"]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				"data-uid": "src/pages/admin/Categories.tsx:214:7",
				"data-prohibitions": "[editContent]",
				open: !!deleteId,
				onOpenChange: (open) => !open && setDeleteId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					"data-uid": "src/pages/admin/Categories.tsx:215:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, {
						"data-uid": "src/pages/admin/Categories.tsx:216:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
							"data-uid": "src/pages/admin/Categories.tsx:217:13",
							"data-prohibitions": "[]",
							children: "Excluir categoria?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
							"data-uid": "src/pages/admin/Categories.tsx:218:13",
							"data-prohibitions": "[]",
							children: "Esta ação não pode ser desfeita e pode afetar produtos que utilizam essa categoria."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, {
						"data-uid": "src/pages/admin/Categories.tsx:222:11",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
							"data-uid": "src/pages/admin/Categories.tsx:223:13",
							"data-prohibitions": "[]",
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/pages/admin/Categories.tsx:224:13",
							"data-prohibitions": "[editContent]",
							onClick: confirmDelete,
							variant: "destructive",
							disabled: isSubmitting,
							children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								"data-uid": "src/pages/admin/Categories.tsx:225:31",
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
export { Categories as default };

//# sourceMappingURL=Categories-G583sMpq.js.map