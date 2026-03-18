import { t as require_jsx_runtime } from "./jsx-runtime-Cd5rONqx.js";
import { t as cn } from "./utils-D00Et-ST.js";
import { t as createLucideIcon } from "./createLucideIcon-CtTukJS7.js";
import { n as LogOut, t as Package } from "./package-NPIWbvmY.js";
import { t as ShoppingCart } from "./shopping-cart-5d0hNETV.js";
import { t as Ticket } from "./ticket-Dp4EgeM7.js";
import { t as Users } from "./users-C5jL5FFH.js";
import { I as useAuthStore, ct as Link, lt as Outlet, nt as Mail, ut as useLocation } from "./index-Ce5mAATO.js";
var BookOpen = createLucideIcon("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]);
var FolderTree = createLucideIcon("folder-tree", [
	["path", {
		d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "hod4my"
	}],
	["path", {
		d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "w4yl2u"
	}],
	["path", {
		d: "M3 5a2 2 0 0 0 2 2h3",
		key: "f2jnh7"
	}],
	["path", {
		d: "M3 3v13a2 2 0 0 0 2 2h3",
		key: "k8epm1"
	}]
]);
var LayoutDashboard = createLucideIcon("layout-dashboard", [
	["rect", {
		width: "7",
		height: "9",
		x: "3",
		y: "3",
		rx: "1",
		key: "10lvy0"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "14",
		y: "3",
		rx: "1",
		key: "16une8"
	}],
	["rect", {
		width: "7",
		height: "9",
		x: "14",
		y: "12",
		rx: "1",
		key: "1hutg5"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "ldoo1y"
	}]
]);
var MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]);
//#endregion
//#region src/pages/admin/AdminLayout.tsx
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const { logout } = useAuthStore();
	const location = useLocation();
	const links = [
		{
			to: "/admin",
			label: "Dashboard",
			icon: LayoutDashboard,
			exact: true
		},
		{
			to: "/admin/products",
			label: "Produtos",
			icon: Package
		},
		{
			to: "/admin/orders",
			label: "Pedidos",
			icon: ShoppingCart
		},
		{
			to: "/admin/users",
			label: "Usuários",
			icon: Users
		},
		{
			to: "/admin/coupons",
			label: "Cupons",
			icon: Ticket
		},
		{
			to: "/admin/categories",
			label: "Categorias",
			icon: FolderTree
		},
		{
			to: "/admin/emails",
			label: "E-mails",
			icon: Mail
		},
		{
			to: "/admin/knowledge",
			label: "Base de Conhecimento",
			icon: BookOpen
		},
		{
			to: "/admin/conversations",
			label: "Conversas IA",
			icon: MessageSquare
		}
	];
	const isActive = (to, exact) => {
		if (exact) return location.pathname === to;
		return location.pathname.startsWith(to);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/admin/AdminLayout.tsx:39:5",
		"data-prohibitions": "[editContent]",
		className: "container mx-auto px-4 py-8 animate-fade-in flex flex-col md:flex-row gap-8 items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			"data-uid": "src/pages/admin/AdminLayout.tsx:40:7",
			"data-prohibitions": "[editContent]",
			className: "w-full md:w-64 shrink-0 md:sticky md:top-28 z-30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"data-uid": "src/pages/admin/AdminLayout.tsx:41:9",
				"data-prohibitions": "[editContent]",
				className: "flex md:flex-col gap-1.5 overflow-x-auto pb-4 md:pb-0 custom-scrollbar",
				children: [
					links.map((l) => {
						const Icon = l.icon;
						const active = isActive(l.to, l.exact);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							"data-uid": "src/pages/admin/AdminLayout.tsx:46:15",
							"data-prohibitions": "[editContent]",
							to: l.to,
							className: cn("flex items-center gap-3 px-4 py-2.5 rounded-lg whitespace-nowrap font-medium transition-colors", active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								"data-uid": "src/pages/admin/AdminLayout.tsx:56:17",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 shrink-0"
							}), l.label]
						}, l.to);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/admin/AdminLayout.tsx:61:11",
						"data-prohibitions": "[]",
						className: "hidden md:block my-2 border-t border-border mx-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"data-uid": "src/pages/admin/AdminLayout.tsx:62:11",
						"data-prohibitions": "[]",
						onClick: logout,
						className: "flex items-center gap-3 px-4 py-2.5 rounded-lg whitespace-nowrap font-medium text-destructive hover:bg-destructive/10 transition-colors mt-auto md:mt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
							"data-uid": "src/pages/admin/AdminLayout.tsx:66:13",
							"data-prohibitions": "[editContent]",
							className: "w-4 h-4 shrink-0"
						}), "Sair"]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			"data-uid": "src/pages/admin/AdminLayout.tsx:72:7",
			"data-prohibitions": "[]",
			className: "flex-1 min-w-0 pb-32 relative z-20 w-full max-w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {
				"data-uid": "src/pages/admin/AdminLayout.tsx:73:9",
				"data-prohibitions": "[editContent]"
			})
		})]
	});
}
//#endregion
export { AdminLayout as default };

//# sourceMappingURL=AdminLayout-wvgsFfxZ.js.map