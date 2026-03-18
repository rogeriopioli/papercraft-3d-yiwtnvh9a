import { a as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import "./react-dom-DbWmce7y.js";
import { n as useToast } from "./use-toast-CgSZLBKi.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { t as ChevronRight } from "./chevron-right-fSbxG958.js";
import { n as Clock, t as FileText } from "./file-text-BOwO7KIU.js";
import { n as Star, t as ProductCard } from "./ProductCard-DOoBkWta.js";
import { t as pbMock } from "./api-VX--JABH.js";
import { B as Badge, F as useProductStore, Q as ShoppingBag, R as useCartStore, V as Button, X as User, c as Card, ct as Link, dt as useNavigate, ft as useParams, l as CardContent, y as Separator } from "./index-Ce5mAATO.js";
import NotFound from "./NotFound-p2O0OMfc.js";
var CirclePlay = createLucideIcon("circle-play", [["path", {
	d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
	key: "kmsa83"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
var Maximize = createLucideIcon("maximize", [
	["path", {
		d: "M8 3H5a2 2 0 0 0-2 2v3",
		key: "1dcmit"
	}],
	["path", {
		d: "M21 8V5a2 2 0 0 0-2-2h-3",
		key: "1e4gt3"
	}],
	["path", {
		d: "M3 16v3a2 2 0 0 0 2 2h3",
		key: "wsl5sc"
	}],
	["path", {
		d: "M16 21h3a2 2 0 0 0 2-2v-3",
		key: "18trek"
	}]
]);
//#endregion
//#region src/components/ReviewSystem.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var MOCK_REVIEWS = [
	{
		id: 1,
		name: "Carlos M.",
		rating: 5,
		date: "12 Out 2023",
		comment: "Molde muito bem feito. As instruções são claras e o resultado final é impressionante."
	},
	{
		id: 2,
		name: "Ana T.",
		rating: 4,
		date: "05 Set 2023",
		comment: "Deu um pouco de trabalho nas partes menores, mas valeu a pena. Recomendo usar um papel de 180g."
	},
	{
		id: 3,
		name: "Lucas V.",
		rating: 5,
		date: "28 Ago 2023",
		comment: "Comprei para presentear minha namorada e ela amou a experiência de montar. Comprarei outros modelos."
	},
	{
		id: 4,
		name: "Julia F.",
		rating: 5,
		date: "15 Jul 2023",
		comment: "Os encaixes são perfeitos. Ter os números no lado de dentro ajuda muito para um acabamento limpo."
	}
];
function ReviewSystem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-uid": "src/components/ReviewSystem.tsx:41:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/components/ReviewSystem.tsx:42:7",
			"data-prohibitions": "[editContent]",
			className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				"data-uid": "src/components/ReviewSystem.tsx:43:9",
				"data-prohibitions": "[]",
				className: "text-2xl font-heading font-bold",
				children: "Avaliações de Clientes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/components/ReviewSystem.tsx:44:9",
				"data-prohibitions": "[editContent]",
				className: "flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/components/ReviewSystem.tsx:45:11",
						"data-prohibitions": "[editContent]",
						className: "flex text-amber-400",
						children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
							"data-uid": "src/components/ReviewSystem.tsx:47:15",
							"data-prohibitions": "[editContent]",
							className: `w-4 h-4 ${i < 4 ? "fill-current" : "fill-current opacity-50"}`
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/components/ReviewSystem.tsx:53:11",
						"data-prohibitions": "[]",
						className: "font-bold",
						children: "4.8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/components/ReviewSystem.tsx:54:11",
						"data-prohibitions": "[]",
						className: "text-muted-foreground text-sm",
						children: "(12 avaliações)"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/components/ReviewSystem.tsx:58:7",
			"data-prohibitions": "[editContent]",
			className: "grid gap-4 md:grid-cols-2",
			children: MOCK_REVIEWS.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				"data-uid": "src/components/ReviewSystem.tsx:60:11",
				"data-prohibitions": "[editContent]",
				className: "shadow-subtle hover:shadow-md transition-shadow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/components/ReviewSystem.tsx:61:13",
					"data-prohibitions": "[editContent]",
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/components/ReviewSystem.tsx:62:15",
						"data-prohibitions": "[editContent]",
						className: "flex justify-between items-start mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/ReviewSystem.tsx:63:17",
							"data-prohibitions": "[editContent]",
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/components/ReviewSystem.tsx:64:19",
								"data-prohibitions": "[]",
								className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
									"data-uid": "src/components/ReviewSystem.tsx:65:21",
									"data-prohibitions": "[editContent]",
									className: "w-5 h-5"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/components/ReviewSystem.tsx:67:19",
								"data-prohibitions": "[editContent]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/components/ReviewSystem.tsx:68:21",
									"data-prohibitions": "[editContent]",
									className: "font-medium text-foreground",
									children: review.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/components/ReviewSystem.tsx:69:21",
									"data-prohibitions": "[editContent]",
									className: "text-xs text-muted-foreground",
									children: review.date
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-uid": "src/components/ReviewSystem.tsx:72:17",
							"data-prohibitions": "[editContent]",
							className: "flex text-amber-400",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								"data-uid": "src/components/ReviewSystem.tsx:74:21",
								"data-prohibitions": "[editContent]",
								className: `w-3.5 h-3.5 ${i < review.rating ? "fill-current" : "text-muted-foreground/30"}`
							}, i))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/components/ReviewSystem.tsx:81:15",
						"data-prohibitions": "[editContent]",
						className: "text-sm text-muted-foreground leading-relaxed",
						children: review.comment
					})]
				})
			}, review.id))
		})]
	});
}
//#endregion
//#region src/pages/ProductDetails.tsx
function ProductDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const { products } = useProductStore();
	const { addItem, setCartOpen } = useCartStore();
	const { toast } = useToast();
	(0, import_react.useEffect)(() => {
		const fetchProduct = async () => {
			if (!id) return;
			setIsLoading(true);
			try {
				setProduct(await pbMock.collection("products").getOne(id));
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProduct();
	}, [id]);
	const mediaList = (0, import_react.useMemo)(() => {
		if (!product) return [];
		const list = product.images.map((url) => ({
			type: "image",
			url
		}));
		if (product.video) list.push({
			type: "video",
			url: product.video
		});
		return list;
	}, [product]);
	const [activeMediaIndex, setActiveMediaIndex] = (0, import_react.useState)(0);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/ProductDetails.tsx:65:7",
		"data-prohibitions": "[]",
		className: "container mx-auto px-4 py-20 flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/ProductDetails.tsx:66:9",
			"data-prohibitions": "[]",
			className: "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"
		})
	});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {
		"data-uid": "src/pages/ProductDetails.tsx:71:24",
		"data-prohibitions": "[editContent]"
	});
	const activeMedia = mediaList[activeMediaIndex];
	const relatedProducts = products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);
	const handleAddToCart = () => {
		addItem(product);
		setCartOpen(true);
		toast({
			title: "Adicionado ao carrinho!",
			description: `${product.title} foi adicionado.`
		});
	};
	const handleBuyNow = () => {
		addItem(product);
		navigate("/checkout");
	};
	const getVideoEmbedUrl = (url) => {
		if (url.includes("youtube.com/watch?v=")) return `https://www.youtube.com/embed/${new URLSearchParams(url.split("?")[1]).get("v")}`;
		if (url.includes("youtu.be/")) return `https://www.youtube.com/embed/${url.split("youtu.be/")[1].split("?")[0]}`;
		if (url.includes("vimeo.com/")) return `https://player.vimeo.com/video/${url.split("vimeo.com/")[1].split("?")[0]}`;
		return url;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/ProductDetails.tsx:110:5",
		"data-prohibitions": "[editContent]",
		className: "container mx-auto px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"data-uid": "src/pages/ProductDetails.tsx:111:7",
				"data-prohibitions": "[editContent]",
				className: "flex items-center text-sm text-muted-foreground mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/ProductDetails.tsx:112:9",
						"data-prohibitions": "[]",
						to: "/",
						className: "hover:text-primary transition-colors",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						"data-uid": "src/pages/ProductDetails.tsx:115:9",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mx-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						"data-uid": "src/pages/ProductDetails.tsx:116:9",
						"data-prohibitions": "[editContent]",
						to: "/",
						className: "hover:text-primary transition-colors",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						"data-uid": "src/pages/ProductDetails.tsx:119:9",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 mx-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/ProductDetails.tsx:120:9",
						"data-prohibitions": "[editContent]",
						className: "text-foreground font-medium truncate",
						children: product.title
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/ProductDetails.tsx:123:7",
				"data-prohibitions": "[editContent]",
				className: "grid grid-cols-1 md:grid-cols-2 gap-12 mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/ProductDetails.tsx:124:9",
					"data-prohibitions": "[editContent]",
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/ProductDetails.tsx:125:11",
						"data-prohibitions": "[editContent]",
						className: "aspect-square bg-muted rounded-2xl overflow-hidden relative border shadow-subtle flex items-center justify-center",
						children: activeMedia.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							"data-uid": "src/pages/ProductDetails.tsx:127:15",
							"data-prohibitions": "[editContent]",
							src: activeMedia.url,
							alt: product.title,
							className: "w-full h-full object-cover animate-fade-in"
						}, activeMedia.url) : activeMedia.url.endsWith(".mp4") || activeMedia.url.endsWith(".webm") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							"data-uid": "src/pages/ProductDetails.tsx:134:15",
							"data-prohibitions": "[editContent]",
							src: activeMedia.url,
							controls: true,
							className: "w-full h-full object-cover animate-fade-in"
						}, activeMedia.url) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							"data-uid": "src/pages/ProductDetails.tsx:141:15",
							"data-prohibitions": "[editContent]",
							src: getVideoEmbedUrl(activeMedia.url),
							className: "w-full h-full animate-fade-in",
							allowFullScreen: true,
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							title: `${product.title} Video`
						}, activeMedia.url)
					}), mediaList.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/ProductDetails.tsx:152:13",
						"data-prohibitions": "[editContent]",
						className: "flex gap-4 overflow-x-auto hide-scrollbar pb-2",
						children: mediaList.map((media, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"data-uid": "src/pages/ProductDetails.tsx:154:17",
							"data-prohibitions": "[editContent]",
							onClick: () => setActiveMediaIndex(idx),
							className: `w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-muted flex items-center justify-center group ${activeMediaIndex === idx ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`,
							children: media.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								"data-uid": "src/pages/ProductDetails.tsx:164:21",
								"data-prohibitions": "[editContent]",
								src: media.url,
								alt: "",
								className: "w-full h-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/ProductDetails.tsx:166:21",
								"data-prohibitions": "[]",
								className: "flex flex-col items-center justify-center text-muted-foreground w-full h-full bg-secondary/50 transition-colors group-hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {
									"data-uid": "src/pages/ProductDetails.tsx:167:23",
									"data-prohibitions": "[editContent]",
									className: "w-6 h-6 mb-1 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/ProductDetails.tsx:168:23",
									"data-prohibitions": "[]",
									className: "text-[9px] font-bold uppercase tracking-wider text-primary",
									children: "Vídeo"
								})]
							})
						}, idx))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/ProductDetails.tsx:179:9",
					"data-prohibitions": "[editContent]",
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/ProductDetails.tsx:180:11",
							"data-prohibitions": "[editContent]",
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								"data-uid": "src/pages/ProductDetails.tsx:181:13",
								"data-prohibitions": "[editContent]",
								className: "text-3xl md:text-4xl font-heading font-bold mb-3 text-foreground",
								children: product.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/ProductDetails.tsx:184:13",
								"data-prohibitions": "[editContent]",
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"data-uid": "src/pages/ProductDetails.tsx:185:15",
									"data-prohibitions": "[editContent]",
									className: "text-3xl font-bold text-primary",
									children: ["R$ ", product.price.toFixed(2).replace(".", ",")]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/ProductDetails.tsx:188:15",
									"data-prohibitions": "[editContent]",
									className: "flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										"data-uid": "src/pages/ProductDetails.tsx:189:17",
										"data-prohibitions": "[editContent]",
										className: "w-4 h-4 text-amber-400 fill-current mr-1"
									}), product.rating]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/ProductDetails.tsx:195:11",
							"data-prohibitions": "[editContent]",
							className: "flex flex-wrap gap-2 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								"data-uid": "src/pages/ProductDetails.tsx:196:13",
								"data-prohibitions": "[]",
								variant: "secondary",
								children: "PDF Digital"
							}), product.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								"data-uid": "src/pages/ProductDetails.tsx:198:15",
								"data-prohibitions": "[editContent]",
								variant: "outline",
								children: tag
							}, tag))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/ProductDetails.tsx:204:11",
							"data-prohibitions": "[editContent]",
							className: "text-muted-foreground leading-relaxed mb-8 text-lg",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/ProductDetails.tsx:208:11",
							"data-prohibitions": "[editContent]",
							className: "bg-card border rounded-xl p-5 mb-8 shadow-subtle grid grid-cols-2 gap-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/ProductDetails.tsx:209:13",
									"data-prohibitions": "[editContent]",
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:210:15",
										"data-prohibitions": "[]",
										className: "p-2 bg-muted rounded-lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											"data-uid": "src/pages/ProductDetails.tsx:211:17",
											"data-prohibitions": "[editContent]",
											className: "w-5 h-5 text-primary"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:213:15",
										"data-prohibitions": "[editContent]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:214:17",
											"data-prohibitions": "[]",
											className: "text-xs text-muted-foreground",
											children: "Folhas A4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:215:17",
											"data-prohibitions": "[editContent]",
											className: "font-medium",
											children: product.specs.sheets
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/ProductDetails.tsx:218:13",
									"data-prohibitions": "[editContent]",
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:219:15",
										"data-prohibitions": "[]",
										className: "p-2 bg-muted rounded-lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											"data-uid": "src/pages/ProductDetails.tsx:220:17",
											"data-prohibitions": "[editContent]",
											className: "w-5 h-5 text-primary"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:222:15",
										"data-prohibitions": "[editContent]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:223:17",
											"data-prohibitions": "[]",
											className: "text-xs text-muted-foreground",
											children: "Tempo Estimado"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:224:17",
											"data-prohibitions": "[editContent]",
											className: "font-medium",
											children: product.specs.time
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/ProductDetails.tsx:227:13",
									"data-prohibitions": "[editContent]",
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:228:15",
										"data-prohibitions": "[]",
										className: "p-2 bg-muted rounded-lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, {
											"data-uid": "src/pages/ProductDetails.tsx:229:17",
											"data-prohibitions": "[editContent]",
											className: "w-5 h-5 text-primary"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:231:15",
										"data-prohibitions": "[editContent]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:232:17",
											"data-prohibitions": "[]",
											className: "text-xs text-muted-foreground",
											children: "Dimensões"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:233:17",
											"data-prohibitions": "[editContent]",
											className: "font-medium",
											children: [product.specs.dimensions, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-uid": "src/pages/ProductDetails.tsx:235:19",
												"data-prohibitions": "[]",
												className: "text-xs text-muted-foreground font-normal ml-1",
												children: "(L x A x P/C)"
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/ProductDetails.tsx:241:13",
									"data-prohibitions": "[editContent]",
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:242:15",
										"data-prohibitions": "[editContent]",
										className: "flex gap-1 bg-muted p-2 rounded-lg items-center",
										children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"data-uid": "src/pages/ProductDetails.tsx:244:19",
											"data-prohibitions": "[editContent]",
											className: `w-1.5 h-1.5 rounded-full ${i < product.difficulty ? "bg-primary" : "bg-muted-foreground/30"}`
										}, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/ProductDetails.tsx:250:15",
										"data-prohibitions": "[editContent]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:251:17",
											"data-prohibitions": "[]",
											className: "text-xs text-muted-foreground",
											children: "Dificuldade"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											"data-uid": "src/pages/ProductDetails.tsx:252:17",
											"data-prohibitions": "[editContent]",
											className: "font-medium",
											children: ["Nível ", product.difficulty]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/ProductDetails.tsx:257:11",
							"data-prohibitions": "[]",
							className: "mt-auto md:sticky md:bottom-8 z-20 bg-background/80 backdrop-blur-md p-4 md:p-0 rounded-2xl md:bg-transparent -mx-4 md:mx-0 shadow-elevation md:shadow-none border-t md:border-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/ProductDetails.tsx:258:13",
									"data-prohibitions": "[]",
									className: "flex flex-col sm:flex-row gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-uid": "src/pages/ProductDetails.tsx:259:15",
										"data-prohibitions": "[]",
										size: "lg",
										className: "w-full text-lg h-14 hover:scale-[1.02] transition-transform active:scale-95 flex-1",
										onClick: handleBuyNow,
										children: "Comprar Agora"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										"data-uid": "src/pages/ProductDetails.tsx:266:15",
										"data-prohibitions": "[]",
										size: "lg",
										variant: "secondary",
										className: "w-full sm:w-auto h-14 hover:scale-[1.02] transition-transform active:scale-95",
										onClick: handleAddToCart,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
											"data-uid": "src/pages/ProductDetails.tsx:272:17",
											"data-prohibitions": "[editContent]",
											className: "w-5 h-5 mr-2"
										}), "Carrinho"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/ProductDetails.tsx:276:13",
									"data-prohibitions": "[]",
									className: "text-center text-xs text-muted-foreground mt-3",
									children: [
										"Download imediato após a confirmação. ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											"data-uid": "src/pages/ProductDetails.tsx:277:53",
											"data-prohibitions": "[]",
											children: "Limite de 3 downloads"
										}),
										" por arquivo."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/ProductDetails.tsx:280:13",
									"data-prohibitions": "[]",
									className: "text-center text-xs text-muted-foreground mt-2 px-4",
									children: [
										"Ao realizar a compra, você concorda com nossos",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											"data-uid": "src/pages/ProductDetails.tsx:282:15",
											"data-prohibitions": "[]",
											to: "/termos",
											className: "text-primary hover:underline font-medium",
											children: "Termos de Uso e Licença"
										}),
										"."
									]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
				"data-uid": "src/pages/ProductDetails.tsx:291:7",
				"data-prohibitions": "[editContent]",
				className: "my-16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewSystem, {
				"data-uid": "src/pages/ProductDetails.tsx:292:7",
				"data-prohibitions": "[editContent]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
				"data-uid": "src/pages/ProductDetails.tsx:293:7",
				"data-prohibitions": "[editContent]",
				className: "my-16"
			}),
			relatedProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"data-uid": "src/pages/ProductDetails.tsx:296:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-uid": "src/pages/ProductDetails.tsx:297:11",
					"data-prohibitions": "[]",
					className: "text-2xl font-heading font-bold mb-6",
					children: "Você também pode gostar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/ProductDetails.tsx:298:11",
					"data-prohibitions": "[editContent]",
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: relatedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						"data-uid": "src/pages/ProductDetails.tsx:300:15",
						"data-prohibitions": "[editContent]",
						product
					}, product.id))
				})]
			})
		]
	});
}
//#endregion
export { ProductDetails as default };

//# sourceMappingURL=ProductDetails-ByshohfT.js.map