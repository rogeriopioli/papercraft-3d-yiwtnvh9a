import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import "./es2015-2BKVf0y2.js";
import { t as cn } from "./utils-D00Et-ST.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { t as ArrowLeft } from "./arrow-left-DoMTnpzX.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-gPCD3JHR.js";
import { t as LoaderCircle } from "./loader-circle-Ceb7piMS.js";
import { t as Save } from "./save-yNwx0QSA.js";
import { n as uploadMedia } from "./api-VX--JABH.js";
import { B as Badge, F as useProductStore, V as Button, Y as X, c as Card, ct as Link, dt as useNavigate, ft as useParams, i as useCategoryStore, l as CardContent, z as Input } from "./index-Ce5mAATO.js";
import { t as Label } from "./label-BYkfzCCt.js";
import { t as Textarea } from "./textarea-gXWoX4SP.js";
var CloudUpload = createLucideIcon("cloud-upload", [
	["path", {
		d: "M12 13v8",
		key: "1l5pq0"
	}],
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "m8 17 4-4 4 4",
		key: "1quai1"
	}]
]);
var Film = createLucideIcon("film", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 3v18",
		key: "bbkbws"
	}],
	["path", {
		d: "M3 7.5h4",
		key: "zfgn84"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "M3 16.5h4",
		key: "1230mu"
	}],
	["path", {
		d: "M17 3v18",
		key: "in4fa5"
	}],
	["path", {
		d: "M17 7.5h4",
		key: "myr1c1"
	}],
	["path", {
		d: "M17 16.5h4",
		key: "go4c1d"
	}]
]);
//#endregion
//#region src/pages/admin/ProductForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProductForm() {
	const { id } = useParams();
	const nav = useNavigate();
	const { products, addProduct, updateProduct } = useProductStore();
	const { categories } = useCategoryStore();
	const { toast } = useToast();
	const fileRef = (0, import_react.useRef)(null);
	const [drag, setDrag] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isUploading, setIsUploading] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		price: "",
		categoryId: "",
		difficulty: "1",
		description: "",
		images: [],
		video: "",
		w: "",
		h: "",
		d: "",
		sheets: "",
		time: "2-3 horas",
		tags: [],
		tagInput: ""
	});
	(0, import_react.useEffect)(() => {
		if (id && products.length > 0) {
			const p = products.find((x) => x.id === id);
			if (p) {
				const [w, h, d] = p.specs.dimensions.match(/[\d.]+/g) || [
					"",
					"",
					""
				];
				setForm({
					title: p.title,
					price: String(p.price),
					categoryId: p.categoryId,
					difficulty: String(p.difficulty),
					description: p.description,
					images: p.images || [],
					video: p.video || "",
					w,
					h,
					d,
					sheets: String(p.specs.sheets),
					time: p.specs.time,
					tags: p.tags || [],
					tagInput: ""
				});
			}
		}
	}, [id, products]);
	const handleChange = (e) => setForm((p) => ({
		...p,
		[e.target.id]: e.target.value
	}));
	const handleFiles = async (files) => {
		if (!files) return;
		setIsUploading(true);
		try {
			const fileArray = Array.from(files);
			for (const file of fileArray) {
				const url = await uploadMedia(file);
				setForm((prev) => {
					if (file.type.startsWith("video/") && !prev.video) return {
						...prev,
						video: url
					};
					if (file.type.startsWith("image/")) {
						const newImages = Array.from(new Set([...prev.images, url]));
						if (newImages.length <= 5) return {
							...prev,
							images: newImages
						};
					}
					return prev;
				});
			}
		} catch (err) {
			toast({
				title: "Erro no upload de mídia",
				variant: "destructive"
			});
		} finally {
			setIsUploading(false);
		}
	};
	const handleTagKey = (e) => {
		if (e.key === "Enter" || e.key === ",") {
			e.preventDefault();
			const t = form.tagInput.replace(",", "").trim();
			if (t && !form.tags.includes(t)) setForm((p) => ({
				...p,
				tags: [...p.tags, t],
				tagInput: ""
			}));
		}
	};
	const submit = async (e) => {
		e.preventDefault();
		if (!form.images.length) return toast({
			title: "Adicione pelo menos 1 imagem!",
			variant: "destructive"
		});
		if (!form.categoryId) return toast({
			title: "Selecione uma categoria!",
			variant: "destructive"
		});
		setIsSubmitting(true);
		const catName = categories.find((c) => c.id === form.categoryId)?.name || "";
		const p = {
			title: form.title,
			price: Number(form.price),
			categoryId: form.categoryId,
			category: catName,
			difficulty: Number(form.difficulty),
			images: form.images,
			video: form.video || void 0,
			description: form.description,
			specs: {
				sheets: form.sheets,
				time: form.time,
				dimensions: `${form.w} x ${form.h} x ${form.d} cm`
			},
			rating: id ? products.find((x) => x.id === id)?.rating || 5 : 5,
			tags: form.tags.length ? form.tags : ["Novo"]
		};
		try {
			if (id) await updateProduct(id, p);
			else await addProduct(p);
			toast({ title: `Produto ${id ? "atualizado" : "criado"} com sucesso!` });
			nav("/admin/products");
		} catch (err) {
			toast({
				title: "Erro ao salvar produto",
				variant: "destructive"
			});
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/ProductForm.tsx:154:5",
		"data-prohibitions": "[editContent]",
		className: "max-w-3xl animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/admin/ProductForm.tsx:155:7",
			"data-prohibitions": "[editContent]",
			className: "flex items-center gap-4 mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/admin/ProductForm.tsx:156:9",
				"data-prohibitions": "[]",
				variant: "ghost",
				size: "icon",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					"data-uid": "src/pages/admin/ProductForm.tsx:157:11",
					"data-prohibitions": "[]",
					to: "/admin/products",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						"data-uid": "src/pages/admin/ProductForm.tsx:158:13",
						"data-prohibitions": "[editContent]",
						className: "w-5 h-5"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/admin/ProductForm.tsx:161:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/admin/ProductForm.tsx:162:11",
					"data-prohibitions": "[editContent]",
					className: "text-3xl font-heading font-bold",
					children: id ? "Editar Produto" : "Novo Produto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/admin/ProductForm.tsx:165:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground",
					children: "Preencha as informações do modelo 3D."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			"data-uid": "src/pages/admin/ProductForm.tsx:168:7",
			"data-prohibitions": "[editContent]",
			className: "border shadow-subtle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				"data-uid": "src/pages/admin/ProductForm.tsx:169:9",
				"data-prohibitions": "[editContent]",
				className: "pt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					"data-uid": "src/pages/admin/ProductForm.tsx:170:11",
					"data-prohibitions": "[editContent]",
					onSubmit: submit,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/ProductForm.tsx:171:13",
							"data-prohibitions": "[editContent]",
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/admin/ProductForm.tsx:172:15",
									"data-prohibitions": "[]",
									children: "Mídia (Máx: 5 Imagens, 1 Vídeo) *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:173:15",
									"data-prohibitions": "[editContent]",
									onDragOver: (e) => {
										e.preventDefault();
										if (!isUploading) setDrag(true);
									},
									onDragLeave: () => setDrag(false),
									onDrop: (e) => {
										e.preventDefault();
										setDrag(false);
										if (!isUploading) handleFiles(e.dataTransfer.files);
									},
									onClick: () => !isUploading && fileRef.current?.click(),
									className: cn("border-2 border-dashed rounded-lg p-6 text-center transition-colors", !isUploading && "cursor-pointer", drag ? "border-primary bg-primary/10" : "bg-muted/30", isUploading && "opacity-60 pointer-events-none"),
									children: [
										isUploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											"data-uid": "src/pages/admin/ProductForm.tsx:193:19",
											"data-prohibitions": "[editContent]",
											className: "mx-auto h-8 w-8 mb-2 animate-spin text-muted-foreground"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, {
											"data-uid": "src/pages/admin/ProductForm.tsx:195:19",
											"data-prohibitions": "[editContent]",
											className: "mx-auto h-8 w-8 mb-2 text-muted-foreground"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/admin/ProductForm.tsx:197:17",
											"data-prohibitions": "[editContent]",
											className: "text-sm font-medium",
											children: isUploading ? "Enviando arquivos..." : "Arraste arquivos ou clique para selecionar"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"data-uid": "src/pages/admin/ProductForm.tsx:202:17",
											"data-prohibitions": "[editContent]",
											type: "file",
											ref: fileRef,
											className: "hidden",
											multiple: true,
											accept: "image/*,video/*",
											onChange: (e) => handleFiles(e.target.files)
										})
									]
								}),
								(form.images.length > 0 || form.video) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:212:17",
									"data-prohibitions": "[editContent]",
									className: "flex gap-4 mt-4 overflow-auto pb-2",
									children: [form.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/ProductForm.tsx:214:21",
										"data-prohibitions": "[]",
										className: "relative w-20 h-20 shrink-0 border rounded-md group bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											"data-uid": "src/pages/admin/ProductForm.tsx:218:23",
											"data-prohibitions": "[editContent]",
											src: img,
											className: "w-full h-full object-cover rounded-md"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											"data-uid": "src/pages/admin/ProductForm.tsx:219:23",
											"data-prohibitions": "[]",
											type: "button",
											onClick: (e) => {
												e.stopPropagation();
												setForm((p) => ({
													...p,
													images: p.images.filter((_, idx) => idx !== i)
												}));
											},
											className: "absolute top-1 right-1 bg-background/80 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												"data-uid": "src/pages/admin/ProductForm.tsx:227:25",
												"data-prohibitions": "[editContent]",
												className: "w-3 h-3"
											})
										})]
									}, i)), form.video && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/ProductForm.tsx:232:21",
										"data-prohibitions": "[]",
										className: "relative w-20 h-20 shrink-0 border rounded-md group bg-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
												"data-uid": "src/pages/admin/ProductForm.tsx:233:23",
												"data-prohibitions": "[editContent]",
												src: form.video,
												className: "w-full h-full object-cover rounded-md"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, {
												"data-uid": "src/pages/admin/ProductForm.tsx:234:23",
												"data-prohibitions": "[editContent]",
												className: "absolute inset-0 m-auto w-6 h-6 text-white drop-shadow pointer-events-none"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												"data-uid": "src/pages/admin/ProductForm.tsx:235:23",
												"data-prohibitions": "[]",
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													setForm((p) => ({
														...p,
														video: ""
													}));
												},
												className: "absolute top-1 right-1 bg-background/80 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
													"data-uid": "src/pages/admin/ProductForm.tsx:243:25",
													"data-prohibitions": "[editContent]",
													className: "w-3 h-3"
												})
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/ProductForm.tsx:251:13",
							"data-prohibitions": "[editContent]",
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:252:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/admin/ProductForm.tsx:253:17",
										"data-prohibitions": "[]",
										htmlFor: "title",
										children: "Nome *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/admin/ProductForm.tsx:254:17",
										"data-prohibitions": "[editContent]",
										id: "title",
										required: true,
										value: form.title,
										onChange: handleChange,
										className: "bg-muted/30"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:262:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/admin/ProductForm.tsx:263:17",
										"data-prohibitions": "[]",
										htmlFor: "price",
										children: "Preço (R$) *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/admin/ProductForm.tsx:264:17",
										"data-prohibitions": "[editContent]",
										id: "price",
										type: "number",
										step: "0.01",
										required: true,
										value: form.price,
										onChange: handleChange,
										className: "bg-muted/30"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:274:15",
									"data-prohibitions": "[editContent]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/admin/ProductForm.tsx:275:17",
										"data-prohibitions": "[]",
										children: "Categoria *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										"data-uid": "src/pages/admin/ProductForm.tsx:276:17",
										"data-prohibitions": "[editContent]",
										value: form.categoryId,
										onValueChange: (v) => setForm((p) => ({
											...p,
											categoryId: v
										})),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											"data-uid": "src/pages/admin/ProductForm.tsx:280:19",
											"data-prohibitions": "[]",
											className: "bg-muted/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
												"data-uid": "src/pages/admin/ProductForm.tsx:281:21",
												"data-prohibitions": "[editContent]",
												placeholder: "Selecione"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
											"data-uid": "src/pages/admin/ProductForm.tsx:283:19",
											"data-prohibitions": "[editContent]",
											children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												"data-uid": "src/pages/admin/ProductForm.tsx:285:23",
												"data-prohibitions": "[editContent]",
												value: c.id,
												children: c.name
											}, c.id))
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:292:15",
									"data-prohibitions": "[editContent]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/admin/ProductForm.tsx:293:17",
										"data-prohibitions": "[]",
										children: "Dificuldade *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										"data-uid": "src/pages/admin/ProductForm.tsx:294:17",
										"data-prohibitions": "[editContent]",
										value: form.difficulty,
										onValueChange: (v) => setForm((p) => ({
											...p,
											difficulty: v
										})),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											"data-uid": "src/pages/admin/ProductForm.tsx:298:19",
											"data-prohibitions": "[]",
											className: "bg-muted/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
												"data-uid": "src/pages/admin/ProductForm.tsx:299:21",
												"data-prohibitions": "[editContent]",
												placeholder: "Selecione"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
											"data-uid": "src/pages/admin/ProductForm.tsx:301:19",
											"data-prohibitions": "[editContent]",
											children: [
												1,
												2,
												3,
												4,
												5
											].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
												"data-uid": "src/pages/admin/ProductForm.tsx:303:23",
												"data-prohibitions": "[editContent]",
												value: String(n),
												children: ["Nível ", n]
											}, n))
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/ProductForm.tsx:312:13",
							"data-prohibitions": "[]",
							className: "space-y-4 pt-4 border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:313:15",
									"data-prohibitions": "[]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										"data-uid": "src/pages/admin/ProductForm.tsx:314:17",
										"data-prohibitions": "[]",
										className: "font-medium text-lg",
										children: "Especificações Técnicas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										"data-uid": "src/pages/admin/ProductForm.tsx:315:17",
										"data-prohibitions": "[]",
										className: "text-sm text-muted-foreground",
										children: "Dimensões: L x A x P/C (Largura, Altura, Profundidade/Comprimento)."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:319:15",
									"data-prohibitions": "[]",
									className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/admin/ProductForm.tsx:320:17",
											"data-prohibitions": "[]",
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/admin/ProductForm.tsx:321:19",
												"data-prohibitions": "[]",
												htmlFor: "w",
												children: "Largura (L) em cm *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/pages/admin/ProductForm.tsx:322:19",
												"data-prohibitions": "[editContent]",
												id: "w",
												required: true,
												value: form.w,
												onChange: handleChange,
												className: "bg-muted/30",
												placeholder: "Ex: 20"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/admin/ProductForm.tsx:331:17",
											"data-prohibitions": "[]",
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/admin/ProductForm.tsx:332:19",
												"data-prohibitions": "[]",
												htmlFor: "h",
												children: "Altura (A) em cm *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/pages/admin/ProductForm.tsx:333:19",
												"data-prohibitions": "[editContent]",
												id: "h",
												required: true,
												value: form.h,
												onChange: handleChange,
												className: "bg-muted/30",
												placeholder: "Ex: 25"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/admin/ProductForm.tsx:342:17",
											"data-prohibitions": "[]",
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/admin/ProductForm.tsx:343:19",
												"data-prohibitions": "[]",
												htmlFor: "d",
												children: "Profund. (P/C) em cm *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/pages/admin/ProductForm.tsx:344:19",
												"data-prohibitions": "[editContent]",
												id: "d",
												required: true,
												value: form.d,
												onChange: handleChange,
												className: "bg-muted/30",
												placeholder: "Ex: 15"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:354:15",
									"data-prohibitions": "[]",
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/ProductForm.tsx:355:17",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/ProductForm.tsx:356:19",
											"data-prohibitions": "[]",
											htmlFor: "sheets",
											children: "Quantidade de Folhas *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/admin/ProductForm.tsx:357:19",
											"data-prohibitions": "[editContent]",
											id: "sheets",
											required: true,
											placeholder: "Ex: 5 folhas A4",
											value: form.sheets,
											onChange: handleChange,
											className: "bg-muted/30"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/admin/ProductForm.tsx:366:17",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/admin/ProductForm.tsx:367:19",
											"data-prohibitions": "[]",
											htmlFor: "time",
											children: "Tempo de Montagem *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/admin/ProductForm.tsx:368:19",
											"data-prohibitions": "[editContent]",
											id: "time",
											required: true,
											value: form.time,
											onChange: handleChange,
											className: "bg-muted/30",
											placeholder: "Ex: 2-3 horas"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/ProductForm.tsx:380:13",
							"data-prohibitions": "[editContent]",
							className: "space-y-2 pt-4 border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/admin/ProductForm.tsx:381:15",
									"data-prohibitions": "[]",
									htmlFor: "tagInput",
									children: "TAGs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									"data-uid": "src/pages/admin/ProductForm.tsx:382:15",
									"data-prohibitions": "[editContent]",
									id: "tagInput",
									placeholder: "Digite a tag e aperte Enter ou vírgula",
									value: form.tagInput,
									onChange: handleChange,
									onKeyDown: handleTagKey,
									className: "bg-muted/30"
								}),
								form.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"data-uid": "src/pages/admin/ProductForm.tsx:391:17",
									"data-prohibitions": "[editContent]",
									className: "flex flex-wrap gap-2 mt-2",
									children: form.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										"data-uid": "src/pages/admin/ProductForm.tsx:393:21",
										"data-prohibitions": "[editContent]",
										variant: "secondary",
										className: "flex items-center gap-1 px-3 py-1",
										children: [
											t,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												"data-uid": "src/pages/admin/ProductForm.tsx:399:23",
												"data-prohibitions": "[]",
												type: "button",
												onClick: () => setForm((p) => ({
													...p,
													tags: p.tags.filter((x) => x !== t)
												})),
												className: "hover:text-destructive",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
													"data-uid": "src/pages/admin/ProductForm.tsx:406:25",
													"data-prohibitions": "[editContent]",
													className: "w-3 h-3"
												})
											})
										]
									}, t))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/ProductForm.tsx:414:13",
							"data-prohibitions": "[]",
							className: "space-y-2 pt-4 border-t",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/admin/ProductForm.tsx:415:15",
								"data-prohibitions": "[]",
								htmlFor: "description",
								children: "Descrição *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								"data-uid": "src/pages/admin/ProductForm.tsx:416:15",
								"data-prohibitions": "[editContent]",
								id: "description",
								required: true,
								rows: 4,
								value: form.description,
								onChange: handleChange,
								className: "bg-muted/30 resize-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/admin/ProductForm.tsx:426:13",
							"data-prohibitions": "[editContent]",
							className: "flex gap-4 pt-4 border-t",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/admin/ProductForm.tsx:427:15",
								"data-prohibitions": "[]",
								type: "button",
								variant: "outline",
								className: "flex-1",
								onClick: () => nav("/admin/products"),
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								"data-uid": "src/pages/admin/ProductForm.tsx:435:15",
								"data-prohibitions": "[editContent]",
								type: "submit",
								disabled: isSubmitting || isUploading,
								className: "flex-1",
								children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									"data-uid": "src/pages/admin/ProductForm.tsx:437:19",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 mr-2 animate-spin"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
									"data-uid": "src/pages/admin/ProductForm.tsx:439:19",
									"data-prohibitions": "[editContent]",
									className: "w-4 h-4 mr-2"
								}), id ? "Salvar Alterações" : "Criar Produto"]
							})]
						})
					]
				})
			})
		})]
	});
}
//#endregion
export { ProductForm as default };

//# sourceMappingURL=ProductForm-Du1b69-Y.js.map