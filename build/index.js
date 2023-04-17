var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-GGRRQU2L.css";

// app/components/util/Error.jsx
var import_fa = require("react-icons/fa"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Error2({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_fa.FaExclamationCircle, {}, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: title }, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/util/Error.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Error_default = Error2;

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "ExpenseEx",
  viewport: "width=device-width,initial-scale=1"
});
function Document({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "link",
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "true"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 45,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Error_default, { title: caughtResponse.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again later." }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 72,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: "Homepage" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 71,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: "An error occurred", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Error_default, { title: "An error occurred", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message || "Something went wrong. Please try again later." }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 90,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: "Homepage" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 94,
        columnNumber: 21
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 93,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 89,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}

// app/routes/expenses.raw.jsx
var expenses_raw_exports = {};
__export(expenses_raw_exports, {
  loader: () => loader
});

// app/data/auth.server.js
var import_bcryptjs = require("bcryptjs"), import_node2 = require("@remix-run/node");

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/auth.server.js
var SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  let userId = (await sessionStorage.getSession(
    request.headers.get("Cookie")
  )).get("userId");
  return userId || null;
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node2.redirect)("/auth?mode=login");
  return userId;
}
async function signup({ email, password }) {
  if (await prisma.user.findFirst({ where: { email } })) {
    let error = new Error(
      "A user with the provided email address exists already."
    );
    throw error.status = 422, error;
  }
  let passwordHash = await (0, import_bcryptjs.hash)(password, 12), user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/expenses");
}
async function login({ email, password }) {
  let existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    let error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    throw error.status = 401, error;
  }
  if (!await (0, import_bcryptjs.compare)(password, existingUser.password)) {
    let error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    throw error.status = 401, error;
  }
  return createUserSession(existingUser.id, "/expenses");
}

// app/data/expenses.server.js
async function addExpense(expenseData, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } }
      }
    });
  } catch {
    throw new Error("Failed to add expense.");
  }
}
async function getExpenses(userId) {
  if (!userId)
    throw new Error("Failed to get expenses.");
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" }
    });
  } catch {
    throw new Error("Failed to get expenses.");
  }
}
async function updateExpense(id, expenseData) {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch {
    throw new Error("Failed to update expense.");
  }
}
async function deleteExpense(id) {
  try {
    await prisma.expense.delete({
      where: { id }
    });
  } catch {
    throw new Error("Failed to delete expense.");
  }
}

// app/routes/expenses.raw.jsx
async function loader({ request }) {
  let userId = await requireUserSession(request);
  return getExpenses(userId);
}

// app/routes/__marketing.jsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => MarketingLayout,
  links: () => links2,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");

// app/components/navigation/MainHeader.jsx
var import_react4 = require("@remix-run/react");

// app/components/util/Logo.jsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/", children: "ExpenseEx" }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Logo_default = Logo;

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function MainHeader() {
  let userId = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.NavLink, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.NavLink, { to: "/pricing", children: "Pricing" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 26,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/auth", className: "cta", children: "Login" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 30,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/routes/__marketing.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MainHeader_default, {}, void 0, !1, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/__marketing.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function loader2({ request }) {
  return getUserFromSession(request);
}
function links2() {
  return [{ rel: "stylesheet", href: marketing_default }];
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node");
function action({ request }) {
  if (request.method !== "POST")
    throw (0, import_node3.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "New Remix App" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 11,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/__app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => ExpensesAppLayout,
  links: () => links3
});

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/routes/__app.jsx
var import_react7 = require("@remix-run/react");

// app/components/navigation/ExpensesHeader.jsx
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ExpensesHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.NavLink, { to: "/expenses", end: !0, children: "Manage Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Form, { method: "post", action: "logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "cta", children: "Logout" }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/__app.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ExpensesAppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ExpensesHeader_default, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function links3() {
  return [{ rel: "stylesheet", href: expenses_default }];
}

// app/routes/__marketing/pricing.jsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => PricingPage,
  meta: () => meta3
});
var import_fa2 = require("react-icons/fa");

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function PricingPlan({ title, price, perks, icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(icon, {}, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 7,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: title }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: price }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: perk }, perk, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var PricingPlan_default = PricingPlan;

// app/routes/__marketing/pricing.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: import_fa2.FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: import_fa2.FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, !1, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      PricingPlan_default,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__marketing/pricing.jsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    ) }, plan.id, !1, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__marketing/pricing.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function meta3() {
  return {
    title: "Pricing",
    description: "See our pricing plans."
  };
}

// app/routes/__marketing/index.jsx
var marketing_exports2 = {};
__export(marketing_exports2, {
  default: () => Index2,
  meta: () => meta4
});
var import_react8 = require("@remix-run/react"), import_fa3 = require("react-icons/fa"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_fa3.FaDollarSign, {}, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 9,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "A Central Space" }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 10,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "img",
          {
            src: "images/expenses-management.jpg",
            alt: "A list of expenses."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__marketing/index.jsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Manage your expenses in one central place." }, void 0, !1, {
            fileName: "app/routes/__marketing/index.jsx",
            lineNumber: 20,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react8.Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "Get Started" }, void 0, !1, {
              fileName: "app/routes/__marketing/index.jsx",
              lineNumber: 23,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_fa3.FaArrowRight, {}, void 0, !1, {
              fileName: "app/routes/__marketing/index.jsx",
              lineNumber: 24,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__marketing/index.jsx",
            lineNumber: 22,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/__marketing/index.jsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__marketing/index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_fa3.FaChartBar, {}, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Detailed Analytics" }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__marketing/index.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__marketing/index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function meta4() {
  return {
    title: "ExpenseEx - The Complete App",
    description: "Manage your expenses with ease."
  };
}

// app/routes/__marketing/auth.jsx
var auth_exports = {};
__export(auth_exports, {
  action: () => action2,
  default: () => AuthPage,
  links: () => links4
});
var import_node4 = require("@remix-run/node");

// app/components/auth/AuthForm.jsx
var import_react9 = require("@remix-run/react"), import_fa4 = require("react-icons/fa"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react9.useSearchParams)(), navigation = (0, import_react9.useTransition)(), validationErrors = (0, import_react9.useActionData)(), authMode = searchParams.get("mode") || "login", submitBtnCaption = authMode === "login" ? "Login" : "Create User", toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user", isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react9.Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa4.FaLock, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 26,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_fa4.FaUserPlus, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 26,
      columnNumber: 46
    }, this) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: error }, error, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react9.Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: toggleBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/data/validation.server.js
function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}
function isValidAmount(value) {
  let amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}
function isValidDate(value) {
  return value && new Date(value).getTime() < new Date().getTime();
}
function validateExpenseInput(input) {
  let validationErrors = {};
  if (isValidTitle(input.title) || (validationErrors.title = "Invalid expense title. Must be at most 30 characters long."), isValidAmount(input.amount) || (validationErrors.amount = "Invalid amount. Must be a number greater than zero."), isValidDate(input.date) || (validationErrors.date = "Invalid date. Must be a date before today."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(input) {
  let validationErrors = {};
  if (isValidEmail(input.email) || (validationErrors.email = "Invalid email address."), isValidPassword(input.password) || (validationErrors.password = "Invalid password. Must be at least 7 characters long."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/styles/auth.css
var auth_default = "/build/_assets/auth-7ZCCMTFI.css";

// app/routes/__marketing/auth.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AuthPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AuthForm_default, {}, void 0, !1, {
    fileName: "app/routes/__marketing/auth.jsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
async function action2({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), credentials = Object.fromEntries(formData);
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  try {
    return authMode === "login" ? await login(credentials) : await signup(credentials);
  } catch (error) {
    if (error.status === 422)
      return { credentials: error.message };
  }
}
function links4() {
  return [{ rel: "stylesheet", href: auth_default }];
}

// app/routes/__app/expenses.analysis.jsx
var expenses_analysis_exports = {};
__export(expenses_analysis_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => ExpensesAnalysisPage,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/components/expenses/ExpenseStatistics.jsx
var import_react10 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function calculateSummaryStatistics(expenses) {
  let amounts = expenses.map((expense) => +expense.amount), maxAmount = Math.max(...amounts), minAmount = Math.min(...amounts), sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0), mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  let { minAmount, maxAmount, sum, mean } = (0, import_react10.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dt", { children: "Total" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dt", { children: "Average" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dt", { children: " Min. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dt", { children: "Max. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var ExpenseStatistics_default = ExpenseStatistics;

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  return maxValue > 0 && (barFillHeight = Math.round(value / maxValue * 100) + "%"), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      },
      void 0,
      !1,
      {
        fileName: "app/components/expenses/ChartBar.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, ChartBar_default = ChartBar;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Chart({ expenses }) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (let expense of expenses) {
    let expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value), totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      ChartBar_default,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label,
      !1,
      {
        fileName: "app/components/expenses/Chart.jsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var Chart_default = Chart;

// app/routes/__app/expenses.analysis.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function ExpensesAnalysisPage() {
  let expenses = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Chart_default, { expenses }, void 0, !1, {
      fileName: "app/routes/__app/expenses.analysis.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ExpenseStatistics_default, { expenses }, void 0, !1, {
      fileName: "app/routes/__app/expenses.analysis.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/expenses.analysis.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
async function loader3({ request }) {
  let userId = await requireUserSession(request), expenses = await getExpenses(userId);
  if (!expenses || expenses.length === 0)
    throw (0, import_node5.json)(
      { message: "Could not load expenses for the requested analysis." },
      {
        status: 404,
        statusText: "Expenses not found"
      }
    );
  return expenses;
}
function CatchBoundary2() {
  var _a;
  let caughtResponse = (0, import_react11.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Error_default, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong - could not load expenses." }, void 0, !1, {
    fileName: "app/routes/__app/expenses.analysis.jsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/expenses.analysis.jsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/expenses.analysis.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/__app/expenses.jsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesLayout,
  loader: () => loader4
});
var import_react13 = require("@remix-run/react"), import_fa5 = require("react-icons/fa");

// app/components/expenses/ExpenseListItem.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ExpenseListItem({ id, title, amount }) {
  let fetcher = (0, import_react12.useFetcher)();
  function deleteExpenseItemHandler() {
    !confirm("Are you sure? Do you want to delete this item?") || fetcher.submit(null, { method: "delete", action: `/expenses/${id}` });
  }
  return fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("article", { className: "expense-item locked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Deleting..." }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react12.Link, { to: id, children: "Edit" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    ExpenseListItem_default,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    },
    void 0,
    !1,
    {
      fileName: "app/components/expenses/ExpensesList.jsx",
      lineNumber: 8,
      columnNumber: 11
    },
    this
  ) }, expense.id, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var ExpensesList_default = ExpensesList;

// app/routes/__app/expenses.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ExpensesLayout() {
  let expenses = (0, import_react13.useLoaderData)(), hasExpenses = expenses && expenses.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app/expenses.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react13.Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa5.FaPlus, {}, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 20,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: "Add Expense" }, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("a", { href: "/expenses/raw", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa5.FaDownload, {}, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 24,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: "Load Raw Data" }, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 25,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ExpensesList_default, { expenses }, void 0, !1, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 28,
        columnNumber: 25
      }, this),
      !hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { id: "no-expenses", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "No expenses found" }, void 0, !1, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: [
          "Start ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react13.Link, { to: "add", children: "adding some" }, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 33,
            columnNumber: 21
          }, this),
          " today."
        ] }, void 0, !0, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app/expenses.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/expenses.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
async function loader4({ request }) {
  let userId = await requireUserSession(request);
  return await getExpenses(userId);
}

// app/routes/__app/expenses/$id.jsx
var id_exports = {};
__export(id_exports, {
  action: () => action3,
  default: () => UpdateExpensesPage,
  meta: () => meta5
});
var import_node6 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/components/expenses/ExpenseForm.jsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function ExpenseForm() {
  let today = new Date().toISOString().slice(0, 10), validationErrors = (0, import_react14.useActionData)(), params = (0, import_react14.useParams)(), expenseData = (0, import_react14.useMatches)().find(
    (match) => match.id === "routes/__app/expenses"
  ).data.find((expense) => expense.id === params.id), navigation = (0, import_react14.useNavigation)(), defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  }, isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    import_react14.Form,
    {
      method: expenseData ? "patch" : "post",
      className: "form",
      id: "expense-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "input",
            {
              type: "text",
              id: "title",
              name: "title",
              required: !0,
              maxLength: 30,
              defaultValue: defaultValues.title
            },
            void 0,
            !1,
            {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 58,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 56,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, !1, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              "input",
              {
                type: "number",
                id: "amount",
                name: "amount",
                min: "0",
                step: "0.01",
                required: !0,
                defaultValue: defaultValues.amount
              },
              void 0,
              !1,
              {
                fileName: "app/components/expenses/ExpenseForm.jsx",
                lineNumber: 71,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, !1, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              "input",
              {
                type: "date",
                id: "date",
                name: "date",
                max: today,
                required: !0,
                defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : ""
              },
              void 0,
              !1,
              {
                fileName: "app/components/expenses/ExpenseForm.jsx",
                lineNumber: 83,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 68,
          columnNumber: 7
        }, this),
        validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: error }, error, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 98,
          columnNumber: 13
        }, this)) }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 96,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "form-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react14.Link, { to: "..", children: "Cancel" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 106,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 102,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: !0,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/__app/expenses/$id.jsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function UpdateExpensesPage() {
  let navigate = (0, import_react15.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
async function action3({ params, request }) {
  let expenseId = params.id;
  if (request.method === "PATCH") {
    let formData = await request.formData(), expenseData = Object.fromEntries(formData);
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }
    return await updateExpense(expenseId, expenseData), (0, import_node6.redirect)("/expenses");
  } else if (request.method === "DELETE")
    return await deleteExpense(expenseId), { deletedId: expenseId };
}
function meta5({ params, location, data, parentsData }) {
  return {
    title: parentsData["routes/__app/expenses"].find(
      (expense2) => expense2.id === params.id
    ).title,
    description: "Update expense."
  };
}

// app/routes/__app/expenses/add.jsx
var add_exports = {};
__export(add_exports, {
  action: () => action4,
  default: () => AddExpensesPage
});
var import_node7 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function AddExpensesPage() {
  let navigate = (0, import_react16.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
async function action4({ request }) {
  let userId = await requireUserSession(request), formData = await request.formData(), expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  return await addExpense(expenseData, userId), (0, import_node7.redirect)("/expenses");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "db9cae4b", entry: { module: "/build/entry.client-3QCJ3X4U.js", imports: ["/build/_shared/chunk-3Q73USOJ.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SVIWPVZM.js", imports: ["/build/_shared/chunk-WNRXA2T4.js", "/build/_shared/chunk-7WJ36XMW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-MPBRE652.js", imports: ["/build/_shared/chunk-ONRAQYY5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses": { id: "routes/__app/expenses", parentId: "routes/__app", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses-VPITW76A.js", imports: ["/build/_shared/chunk-PQTATYW2.js", "/build/_shared/chunk-CE64HNUM.js", "/build/_shared/chunk-7WJ36XMW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses.analysis": { id: "routes/__app/expenses.analysis", parentId: "routes/__app", path: "expenses/analysis", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses.analysis-XZNXAY32.js", imports: ["/build/_shared/chunk-PQTATYW2.js", "/build/_shared/chunk-WNRXA2T4.js", "/build/_shared/chunk-CE64HNUM.js", "/build/_shared/chunk-7WJ36XMW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app/expenses/$id": { id: "routes/__app/expenses/$id", parentId: "routes/__app/expenses", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses/$id-5P5IS6NZ.js", imports: ["/build/_shared/chunk-XTINOX3H.js", "/build/_shared/chunk-ORVPAIGU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses/add": { id: "routes/__app/expenses/add", parentId: "routes/__app/expenses", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses/add-SI55AE4C.js", imports: ["/build/_shared/chunk-XTINOX3H.js", "/build/_shared/chunk-ORVPAIGU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing": { id: "routes/__marketing", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing-TBXZOWVL.js", imports: ["/build/_shared/chunk-CE64HNUM.js", "/build/_shared/chunk-ONRAQYY5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/auth": { id: "routes/__marketing/auth", parentId: "routes/__marketing", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing/auth-C6JBDGAV.js", imports: ["/build/_shared/chunk-ORVPAIGU.js", "/build/_shared/chunk-7WJ36XMW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/index": { id: "routes/__marketing/index", parentId: "routes/__marketing", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__marketing/index-NYFIXXHR.js", imports: ["/build/_shared/chunk-7WJ36XMW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/pricing": { id: "routes/__marketing/pricing", parentId: "routes/__marketing", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing/pricing-HU2HDIQV.js", imports: ["/build/_shared/chunk-7WJ36XMW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_index-I3FQJP3Z.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/expenses.raw": { id: "routes/expenses.raw", parentId: "root", path: "expenses/raw", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.raw-2AQ55NWI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-TIVGJ7SQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-DB9CAE4B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/expenses.raw": {
    id: "routes/expenses.raw",
    parentId: "root",
    path: "expenses/raw",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_raw_exports
  },
  "routes/__marketing": {
    id: "routes/__marketing",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: marketing_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__marketing/pricing": {
    id: "routes/__marketing/pricing",
    parentId: "routes/__marketing",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: pricing_exports
  },
  "routes/__marketing/index": {
    id: "routes/__marketing/index",
    parentId: "routes/__marketing",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: marketing_exports2
  },
  "routes/__marketing/auth": {
    id: "routes/__marketing/auth",
    parentId: "routes/__marketing",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__app/expenses.analysis": {
    id: "routes/__app/expenses.analysis",
    parentId: "routes/__app",
    path: "expenses/analysis",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_analysis_exports
  },
  "routes/__app/expenses": {
    id: "routes/__app/expenses",
    parentId: "routes/__app",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/__app/expenses/$id": {
    id: "routes/__app/expenses/$id",
    parentId: "routes/__app/expenses",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/__app/expenses/add": {
    id: "routes/__app/expenses/add",
    parentId: "routes/__app/expenses",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
