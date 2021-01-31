// contract: TXDwN9YMqpfrvgycVWGzCZCf5U8ayKZY66
// creator : TRBxt4Q231WVxM77c2h6nANC2sm84Le9cU
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        102: function (e, t) {},
        103: function (e, t) {},
        207: function (e, t, a) {
            "use strict";
            a.r(t);
            var l = a(0),
                n = a.n(l),
                r = a(53),
                s = a.n(r),
                i = (a(65), a(3)),
                c = a.n(i),
                m = a(10),
                o = a(54),
                d = a(55),
                u = a(58),
                f = a(56),
                v = a(59),
                E = (a(68), a(24), a(74), a(76), a(57)),
                g = a.n(E),
                h = {
                    tronWeb: !1,
                    contract: !1,
                    setTronWeb: function (e) {
                        (this.tronWeb = e),
                            (this.contract = e.contract(
                                [
                                    { constant: !1, inputs: [], name: "withdraw_referral", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" },
                                    { constant: !0, inputs: [], name: "devCommission", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    { constant: !1, inputs: [], name: "withdraw", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" },
                                    { constant: !0, inputs: [], name: "totalPayout", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    { constant: !0, inputs: [], name: "commissionDivisor", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    { constant: !0, inputs: [], name: "totalInvested", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    { constant: !1, inputs: [{ name: "_address", type: "address" }], name: "updateFeed1", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" },
                                    { constant: !0, inputs: [], name: "getContractBalance", outputs: [{ name: "cBal", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    { constant: !1, inputs: [{ name: "_address", type: "address" }], name: "updateFeed2", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" },
                                    { constant: !0, inputs: [{ name: "_addr", type: "address" }], name: "getProfit", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    { constant: !0, inputs: [], name: "totalRefDistributed", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    {
                                        constant: !0,
                                        inputs: [{ name: "", type: "address" }],
                                        name: "players",
                                        outputs: [
                                            { name: "trxDeposit", type: "uint256" },
                                            { name: "time", type: "uint256" },
                                            { name: "j_time", type: "uint256" },
                                            { name: "interestProfit", type: "uint256" },
                                            { name: "affRewards", type: "uint256" },
                                            { name: "payoutSum", type: "uint256" },
                                            { name: "affFrom", type: "address" },
                                            { name: "td_team", type: "uint256" },
                                            { name: "td_business", type: "uint256" },
                                            { name: "reward_earned", type: "uint256" },
                                        ],
                                        payable: !1,
                                        stateMutability: "view",
                                        type: "function",
                                    },
                                    {
                                        constant: !0,
                                        inputs: [{ name: "", type: "address" }],
                                        name: "preferals",
                                        outputs: [
                                            { name: "player_addr", type: "address" },
                                            { name: "aff1sum", type: "uint256" },
                                            { name: "aff2sum", type: "uint256" },
                                            { name: "aff3sum", type: "uint256" },
                                        ],
                                        payable: !1,
                                        stateMutability: "view",
                                        type: "function",
                                    },
                                    { constant: !1, inputs: [{ name: "_affAddr", type: "address" }], name: "deposit", outputs: [], payable: !0, stateMutability: "payable", type: "function" },
                                    { constant: !0, inputs: [], name: "totalPlayers", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" },
                                    { constant: !1, inputs: [], name: "reinvest", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" },
                                    { inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor" },
                                ],
                                "TXDwN9YMqpfrvgycVWGzCZCf5U8ayKZY66"
                            )),
                            console.log("deployed contract instance", this.contract);
                    },
                },
                p = a(6),
                _ = a.n(p),
                w = (function (e) {
                    function t(e) {
                        var a;
                        return (
                            Object(o.a)(this, t),
                            ((a = Object(u.a)(this, Object(f.a)(t).call(this, e))).playerInfo = function (e) {
                                h.contract.players(e).call(0, function (e, t) {
                                    if (e) console.log(e);
                                    else {
                                        console.log("player_info", t);
                                        var l = t.trxDeposit._hex;
                                        (l = parseInt(l, 16)), (l /= 1e6);
                                        var n = parseInt(t.payoutSum._hex, 16) / 1e6,
                                            r = parseInt(t.affRewards._hex, 16) / 1e6;
                                        a.setState({ player_referral: r }), a.setState({ payout_sum: n }), a.setState({ player_total_investment: l });
                                    }
                                });
                            }),
                            (a.total_player = function () {
                                var e = this;
                                h.contract.totalPlayers().call(0, function (t, a) {
                                    if (t) console.log(t);
                                    else {
                                        var l = parseInt(a._hex, 16);
                                        e.setState({ total_team: l });
                                    }
                                });
                            }),
                            (a.getProfit = function (e) {
                                var t = this;
                                h.contract.getProfit(e).call(0, function (e, a) {
                                    if (e) console.log(e);
                                    else {
                                        var l = parseInt(a._hex, 16);
                                        t.setState({ total_profit: l });
                                    }
                                });
                            }),
                            (a.getReferral = function (e) {
                                var t = this;
                                h.contract.preferals(e).call(0, function (e, a) {
                                    e
                                        ? console.log(e)
                                        : (t.setState({ L1: parseInt(a.aff1sum._hex, 16) }), t.setState({ L2: parseInt(a.aff2sum._hex, 16) }), t.setState({ L3: parseInt(a.aff3sum._hex, 16) }), t.setState({ player_ref_count: a }));
                                });
                            }),
                            (a.totalInvested = function () {
                                var e = this;
                                h.contract.totalInvested().call(0, function (t, a) {
                                    if (t) console.log(t);
                                    else {
                                        var l = parseInt(a._hex, 16) / 1e6;
                                        e.setState({ total_invested: l });
                                    }
                                });
                            }),
                            (a.total_ref_dis = function () {
                                var e = this;
                                h.contract.totalRefDistributed().call(0, function (t, a) {
                                    if (t) console.log(t);
                                    else {
                                        var l = parseInt(a._hex, 16) / 1e6;
                                        e.setState({ total_ref_reward: l });
                                    }
                                });
                            }),
                            (a.onMessageSend = Object(m.a)(
                                c.a.mark(function e() {
                                    var t, l, n, r, s, i;
                                    return c.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ((a.setState({ dep_loading: !0 }), (t = window.location.search), (l = new URLSearchParams(t)), (n = l.get("ref")), !((r = a.state.value) < 100))) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    return _()({ title: "Minimum deposit is 100 TRX", type: "error" }), a.setState({ dep_loading: !1 }), e.abrupt("return", !1);
                                                case 9:
                                                    return (
                                                        (s = 1e6 * r),
                                                        (i = window.tronWeb.isAddress(n) ? n : a.state.creator),
                                                        (e.next = 13),
                                                        h.contract
                                                            .deposit(i)
                                                            .send({ shouldPollResponse: !1, callValue: s })
                                                            .then(function (e) {
                                                                a.setState({ dep_loading: !1 }),
                                                                    console.log(e),
                                                                    _()({ title: "Successfully Deposit", type: "success" }),
                                                                    setTimeout(function () {
                                                                        window.location.reload();
                                                                    }, 2e3);
                                                            })
                                                            .catch(function (e) {
                                                                a.setState({ dep_loading: !1 }), console.log(e), _()({ title: "Network Error", type: "error" });
                                                            })
                                                    );
                                                case 13:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (a.withdrawRef = Object(m.a)(
                                c.a.mark(function e() {
                                    return c.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        h.contract
                                                            .withdraw_referral()
                                                            .send({ shouldPollResponse: !1 })
                                                            .then(function (e) {
                                                                console.log(e),
                                                                    _()({ title: "Withdraw Successfully", type: "success" }),
                                                                    setTimeout(function () {
                                                                        window.location.reload();
                                                                    }, 2e3);
                                                            })
                                                            .catch(function (e) {
                                                                a.setState({ dep_loading: !1 }), console.log(e), _()({ title: "Network Error", type: "error" });
                                                            })
                                                    );
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (a.reinvest = Object(m.a)(
                                c.a.mark(function e() {
                                    return c.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        a.setState({ rei_loading: !0 }),
                                                        (e.next = 3),
                                                        h.contract
                                                            .reinvest()
                                                            .send({ shouldPollResponse: !1 })
                                                            .then(function (e) {
                                                                a.setState({ rei_loading: !1 }), console.log("res here", e), _()({ title: "Successfully Reinvest", type: "success" });
                                                            })
                                                            .catch(function (e) {
                                                                a.setState({ rei_loading: !1 }), console.log(e), _()({ title: "Network Error", type: "error" });
                                                            })
                                                    );
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (a.withdraw = Object(m.a)(
                                c.a.mark(function e() {
                                    return c.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (e.next = 2),
                                                        h.contract
                                                            .withdraw()
                                                            .send({ shouldPollResponse: !1 })
                                                            .then(function (e) {
                                                                console.log("player address inside withdraw promise", a.state.tronlink_address),
                                                                    a.getProfit(a.state.tronlink_address),
                                                                    console.log(e),
                                                                    a.setState({ wit_loading: !1 }),
                                                                    _()({ title: "Successfully Withdraw", type: "success" });
                                                            })
                                                            .catch(function (e) {
                                                                a.setState({ wit_loading: !1 }), console.log(e), _()({ title: "Network Error", type: "error" });
                                                            })
                                                    );
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            (a.copyCodeToClipboard = function () {
                                a.textArea.select(), document.execCommand("copy");
                            }),
                            (a.state = {
                                dep_loading: !1,
                                rei_loading: !1,
                                wit_loading: !1,
                                loading: !1,
                                wallet_balance: "0",
                                player_total_investment: "0",
                                total_invested: "0",
                                total_team: "0",
                                payout_sum: "0",
                                total_ref_reward: "0",
                                player_referral: "0",
                                value: "",
                                total_profit: "",
                                creator: "TRBxt4Q231WVxM77c2h6nANC2sm84Le9cU",
                                tronlink_address: "",
                                ref_link: "https://tronfactory.vip?ref=TRBxt4Q231WVxM77c2h6nANC2sm84Le9cU",
                                tronWeb: { installed: !1, loggedIn: !1 },
                                account: "",
                                balance: 0,
                                reward_earned: "0",
                                player_ref_count: "0",
                                L1: "0",
                                L2: "0",
                                L3: "0",
                            }),
                            a
                        );
                    }
                    return (
                        Object(v.a)(t, e),
                        Object(d.a)(t, [
                            {
                                key: "componentDidMount",
                                value: (function () {
                                    var e = Object(m.a)(
                                        c.a.mark(function e() {
                                            var t,
                                                a = this;
                                            return c.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (t = setInterval(
                                                                        Object(m.a)(
                                                                            c.a.mark(function e() {
                                                                                var l, n, r;
                                                                                return c.a.wrap(function (e) {
                                                                                    for (;;)
                                                                                        switch ((e.prev = e.next)) {
                                                                                            case 0:
                                                                                                if (!window.tronWeb || !window.tronWeb.ready) {
                                                                                                    e.next = 13;
                                                                                                    break;
                                                                                                }
                                                                                                return clearInterval(t), (l = window.tronWeb.defaultAddress.base58), (e.next = 5), window.tronWeb.trx.getAccount();
                                                                                            case 5:
                                                                                                (n = e.sent),
                                                                                                    (r = n.balance / 1e6),
                                                                                                    a.setState({ wallet_balance: r }),
                                                                                                    a.playerInfo(l),
                                                                                                    a.getProfit(l),
                                                                                                    a.getReferral(l),
                                                                                                    a.setState({ tronlink_address: l }),
                                                                                                    a.setState({ ref_link: "https://tronfactory.vip?ref=" + l });
                                                                                            case 13:
                                                                                            case "end":
                                                                                                return e.stop();
                                                                                        }
                                                                                }, e);
                                                                            })
                                                                        ),
                                                                        200
                                                                    )),
                                                                    setInterval(function () {
                                                                        a.getProfit(a.state.tronlink_address);
                                                                    }, 2e3),
                                                                    (e.next = 4),
                                                                    new Promise(function (e) {
                                                                        var t = { installed: !!window.tronWeb, loggedIn: window.tronWeb && window.tronWeb.ready };
                                                                        if (t.installed) return a.setState({ tronWeb: t }), e();
                                                                        var l = 0,
                                                                            n = setInterval(function () {
                                                                                return l >= 15
                                                                                    ? ((window.tronWeb = new g.a("https://api.trongrid.io", "https://api.trongrid.io", "https://api.trongrid.io")),
                                                                                      a.setState({ tronWeb: { installed: !1, loggedIn: !1 } }),
                                                                                      clearInterval(n),
                                                                                      e())
                                                                                    : ((t.installed = !!window.tronWeb), (t.loggedIn = window.tronWeb && window.tronWeb.ready), t.installed ? (a.setState({ tronWeb: t }), void e()) : l++);
                                                                            }, 100);
                                                                    })
                                                                );
                                                            case 4:
                                                                this.state.tronWeb.loggedIn ||
                                                                    ((window.tronWeb.defaultAddress = { hex: window.tronWeb.address.toHex("TRBxt4Q231WVxM77c2h6nANC2sm84Le9cU"), base58: "TRBxt4Q231WVxM77c2h6nANC2sm84Le9cU" }),
                                                                    window.tronWeb.on("addressChanged", function () {
                                                                        a.state.tronWeb.loggedIn || a.setState({ tronWeb: { installed: !0, loggedIn: !0 } });
                                                                    })),
                                                                    window.tronWeb,
                                                                    h.setTronWeb(window.tronWeb),
                                                                    this.totalInvested(),
                                                                    this.total_player(),
                                                                    this.total_ref_dis();
                                                            case 10:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    this.state.dep_loading, this.state.rei_loading, this.state.wit_loading;
                                    return n.a.createElement(
                                        "div",
                                        null,
                                        n.a.createElement(
                                            "div",
                                            { className: "app-js" },
                                            n.a.createElement(
                                                "header",
                                                { className: "header" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "container header__container" },
                                                    n.a.createElement("a", { href: "index.html", className: "logo logo_link" }, n.a.createElement("img", { className: "logo_class", src: "newx.png", alt: "logo_image" })),
                                                    n.a.createElement(
                                                        "ul",
                                                        { className: "m-none menu" },
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { className: "bold", href: "#", "data-toggle": "ref" },
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user" })),
                                                                "Referrals"
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { className: "bold", href: "#", "data-toggle": "faq" },
                                                                n.a.createElement("svg", { height: "1.9rem", width: "1.2rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#what" })),
                                                                "f.a.q."
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { className: "bold", href: "https://tronfactory.vip/tronfactory_audit_report.pdf", target: "_blank" },
                                                                n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#b86da5" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" })),
                                                                "Audit Report"
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "ul",
                                                        { style: { marginTop: "0%" }, className: "m-none soc_and_lang" },
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { href: "https://t.me/TronFactoryVIP", target: "_blank" },
                                                                n.a.createElement("svg", { height: "1.6rem", width: "1.8rem", fill: "#b86da5" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#telegram" }))
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "ul",
                                                        { className: "user_menu" },
                                                        n.a.createElement(
                                                            "li",
                                                            { "v-if": "!user" },
                                                            n.a.createElement(
                                                                "a",
                                                                { href: "#", "data-toggle": "login" },
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2rem", fill: "#b86da5" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user" }))
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { href: "#", className: "btn-menu" },
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#menu" }))
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "app" },
                                                n.a.createElement(
                                                    "section",
                                                    { className: "home" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "home-stat" },
                                                            n.a.createElement("div", { className: "home-stat__item" }),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "home-stat__item" },
                                                                n.a.createElement("div", { className: "m-none" }, n.a.createElement("span", null, "Investors:"), " ", n.a.createElement("b", null, this.state.total_team)),
                                                                n.a.createElement("span", null, "total invested:"),
                                                                " ",
                                                                n.a.createElement("b", null, this.state.total_invested, " TRX")
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "slider" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "slider__left" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "flex" },
                                                                    n.a.createElement("h2", { style: { fontSize: "2.5rem" } }, "100 % verified smart contract"),
                                                                    n.a.createElement("img", { style: { height: "11rem" }, src: "static/img/png/trone.png", alt: "" })
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "home-procent" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "home-procent__bg" },
                                                                        n.a.createElement("h3", null, "200 %"),
                                                                        n.a.createElement("h5", null, "in just"),
                                                                        n.a.createElement("h4", null, "10 days"),
                                                                        n.a.createElement("h5", { className: "m-none" }, "in just ", n.a.createElement("b", null, "10 days"))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "home-procent__info" },
                                                                        n.a.createElement("h2", null, "20%"),
                                                                        n.a.createElement("h3", null, "Daily ROI"),
                                                                        n.a.createElement("h4", { className: "home-procent__info--white d-none" }, "10% + 3% + 2%")
                                                                    )
                                                                ),
                                                                n.a.createElement("p", null, "Get 15% referral rewards"),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "home-stat__btn" },
                                                                    n.a.createElement(
                                                                        "button",
                                                                        { style: { width: "50%" }, className: "btn btn--red" },
                                                                        n.a.createElement(
                                                                            "a",
                                                                            { style: { textDecoration: "none", color: "white" }, href: "https://tronscan.org/#/contract/TXDwN9YMqpfrvgycVWGzCZCf5U8ayKZY66", target: "_blank" },
                                                                            "Contract"
                                                                        ),
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#b86da5" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "slider__right m-none" },
                                                                n.a.createElement("div", { style: { marginLeft: "20%" }, className: "swiper-slide" }, n.a.createElement("img", { src: "assests/static/img/png/headerimage.png", alt: "" })),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "swiper-container" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "slider__sroll swiper-wrapper" },
                                                                        n.a.createElement("div", { className: "swiper-slide" }, n.a.createElement("img", { src: "assests/static/img/png/slider1.png", alt: "" }))
                                                                    ),
                                                                    n.a.createElement("div", { className: "swiper-pagination" })
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "section",
                                                    { className: "investments" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "h2",
                                                            null,
                                                            "investments",
                                                            n.a.createElement("div", { className: "m-none" }, n.a.createElement("span", null, "Investment : ", n.a.createElement("b", { className: "text-green" }, this.state.total_invested)))
                                                        ),
                                                        n.a.createElement("h3", { className: "d-none" }, "Wallet Bal: ", n.a.createElement("b", null, this.state.wallet_balance)),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "inves-block" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "investments__stat" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "investments__stat-item" },
                                                                    n.a.createElement("span", null, "total invested:"),
                                                                    n.a.createElement("b", null, this.state.player_total_investment, " TRX")
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "investments__stat-item" },
                                                                    n.a.createElement("span", null, "total paid:"),
                                                                    n.a.createElement("b", null, " ", this.state.payout_sum, " TRX")
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "investments__stat-item d-none" },
                                                                    n.a.createElement("span", null, "Total Referrals"),
                                                                    n.a.createElement("b", null, this.state.player_referral)
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "investments__stat-item m-none" },
                                                                    n.a.createElement("span", null, "Wallet Bal:"),
                                                                    n.a.createElement("b", null, this.state.wallet_balance, " TRX")
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "invest__body" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "investments__form" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "investments__form-block" },
                                                                        n.a.createElement("div", { className: "inv-info" }, n.a.createElement("h3", null, "Invest and earn"), n.a.createElement("h2", null, "20% per day")),
                                                                        n.a.createElement("h4", null, "Enter the investment amount :"),
                                                                        n.a.createElement(
                                                                            "div",
                                                                            { className: "input" },
                                                                            n.a.createElement("svg", { height: "2.1rem", width: "2rem", fill: "#b86da5" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#tron" })),
                                                                            n.a.createElement("input", {
                                                                                value: this.state.value,
                                                                                onChange: function (t) {
                                                                                    return e.setState({ value: t.target.value });
                                                                                },
                                                                                placeholder: "Min 100 ",
                                                                                type: "text",
                                                                                "v-model": "amount",
                                                                            }),
                                                                            n.a.createElement("span", null, "TRX")
                                                                        ),
                                                                        n.a.createElement(
                                                                            "div",
                                                                            { className: "input__min" },
                                                                            n.a.createElement("span", null, "min: ", n.a.createElement("b", null, "100 TRX")),
                                                                            n.a.createElement("span", null, "max: ", n.a.createElement("b", null, "1000000 TRX"))
                                                                        ),
                                                                        n.a.createElement(
                                                                            "button",
                                                                            { className: "btn btn--green", onClick: this.onMessageSend },
                                                                            "invest now",
                                                                            n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "investments__form" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "investments__form-block" },
                                                                        n.a.createElement("div", { className: "inv-info" }, n.a.createElement("h3", null, "Refer and earn"), n.a.createElement("h2", null, "15% Referral")),
                                                                        n.a.createElement("h4", null, "Avaliable Referral To Withdraw:"),
                                                                        n.a.createElement(
                                                                            "div",
                                                                            { className: "input" },
                                                                            n.a.createElement("svg", { height: "2.1rem", width: "2rem", fill: "#b86da5" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#tron" })),
                                                                            n.a.createElement("input", { disabled: !0, value: this.state.player_referral, type: "text", "v-model": "amount" }),
                                                                            n.a.createElement("span", null, "  TRX")
                                                                        ),
                                                                        n.a.createElement("div", { className: "input__min" }, n.a.createElement("span", null, "Level : ", n.a.createElement("b", null, "10% + 3% + 2%"))),
                                                                        n.a.createElement(
                                                                            "button",
                                                                            { className: "btn btn--green", onClick: this.withdrawRef },
                                                                            "Withdraw",
                                                                            n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "package-empty", "v-for": "d in list_temp" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { class: "package__table package__footer" },
                                                                        n.a.createElement(
                                                                            "table",
                                                                            null,
                                                                            n.a.createElement(
                                                                                "tbody",
                                                                                null,
                                                                                n.a.createElement("tr", null, n.a.createElement("td", null, "Invested:"), n.a.createElement("td", null, this.state.player_total_investment, "TRX")),
                                                                                n.a.createElement("tr", null, n.a.createElement("td", null, "total paid:"), n.a.createElement("td", null, this.state.payout_sum, " TRX"))
                                                                            )
                                                                        ),
                                                                        n.a.createElement("h4", { "v-if": "now < dep.date_end" }, "available dividends"),
                                                                        n.a.createElement("h3", { "v-if": "now < dep.date_end" }, this.state.total_profit / 1e6),
                                                                        n.a.createElement(
                                                                            "button",
                                                                            { onClick: this.withdraw, className: "btn btn--green" },
                                                                            "Withdraw",
                                                                            n.a.createElement(
                                                                                "svg",
                                                                                { height: "1.7rem", width: "1.72rem", fill: "#b86da5" },
                                                                                n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" })
                                                                            )
                                                                        ),
                                                                        n.a.createElement(
                                                                            "button",
                                                                            { style: { width: "100%" }, onClick: this.reinvest, className: "btn btn--green" },
                                                                            "Reinvest",
                                                                            n.a.createElement(
                                                                                "svg",
                                                                                { height: "1.7rem", width: "1.72rem", fill: "#b86da5" },
                                                                                n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" })
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "section",
                                                    { className: "referral", "v-if": "referal_stat.level1" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement("h2", { className: "m-none" }, "Referrals"),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "referral__container" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "referral__top" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "referral__header" },
                                                                    n.a.createElement("img", { src: "assests/static/img/svg/ref.svg", alt: "" }),
                                                                    n.a.createElement("h2", null, "Referrals")
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "referral__content" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "referral__content__left m-none" },
                                                                        n.a.createElement(
                                                                            "table",
                                                                            { "v-if": "referal_stat.level1" },
                                                                            n.a.createElement(
                                                                                "tbody",
                                                                                null,
                                                                                n.a.createElement(
                                                                                    "tr",
                                                                                    null,
                                                                                    n.a.createElement("td", null, "1 level\xa0", n.a.createElement("b", null, "(10%)"), ":"),
                                                                                    n.a.createElement(
                                                                                        "td",
                                                                                        null,
                                                                                        this.state.L1,
                                                                                        "\xa0",
                                                                                        n.a.createElement(
                                                                                            "svg",
                                                                                            { height: "1.2rem", width: "1.2rem", fill: "#b86da5" },
                                                                                            n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user2" })
                                                                                        ),
                                                                                        "\xa0"
                                                                                    )
                                                                                ),
                                                                                n.a.createElement(
                                                                                    "tr",
                                                                                    null,
                                                                                    n.a.createElement("td", null, "2 level\xa0", n.a.createElement("b", null, "(3%)"), ":"),
                                                                                    n.a.createElement(
                                                                                        "td",
                                                                                        null,
                                                                                        this.state.L2,
                                                                                        "\xa0",
                                                                                        n.a.createElement(
                                                                                            "svg",
                                                                                            { height: "1.2rem", width: "1.2rem", fill: "#b86da5" },
                                                                                            n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user2" })
                                                                                        ),
                                                                                        "\xa0"
                                                                                    )
                                                                                ),
                                                                                n.a.createElement(
                                                                                    "tr",
                                                                                    null,
                                                                                    n.a.createElement("td", null, "3 level\xa0", n.a.createElement("b", null, "(2%)"), ":"),
                                                                                    n.a.createElement(
                                                                                        "td",
                                                                                        null,
                                                                                        this.state.L3,
                                                                                        "\xa0",
                                                                                        n.a.createElement(
                                                                                            "svg",
                                                                                            { height: "1.2rem", width: "1.2rem", fill: "#b86da5" },
                                                                                            n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user2" })
                                                                                        ),
                                                                                        "\xa0"
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "referral__content__right" },
                                                                        n.a.createElement("h3", null, "Your referral link:"),
                                                                        n.a.createElement("br", null),
                                                                        n.a.createElement("br", null),
                                                                        n.a.createElement("h2", { style: { whiteSpace: "normal", wordWrap: "break-word" } }, this.state.ref_link),
                                                                        n.a.createElement("input", {
                                                                            ref: function (t) {
                                                                                return (e.textArea = t);
                                                                            },
                                                                            value: this.state.ref_link,
                                                                            type: "text",
                                                                            id: "ref",
                                                                            style: { opacity: 0, position: "absolute", zIndex: -1 },
                                                                        }),
                                                                        n.a.createElement(
                                                                            "button",
                                                                            {
                                                                                onClick: function () {
                                                                                    return e.copyCodeToClipboard();
                                                                                },
                                                                                className: "btn btn--blue mt-5",
                                                                            },
                                                                            n.a.createElement("span", { className: "cpy_btn" }, "Copy Link")
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement("div", { className: "referral__footer", "v-if": "user" })
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "section",
                                                    { className: "about" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement("h2", null, "How it works?"),
                                                        n.a.createElement(
                                                            "p",
                                                            null,
                                                            " Tronfactory is a decentralized investment platform powered by TRON smart contract technology. A smart contract guarantees 100 % safety and transparency of work. Accrual and payment of dividends occurs automatically.  Tronfactory is a great opportunity to multiply your assets in just a few days."
                                                        ),
                                                        n.a.createElement("div", { className: "subtitle" }, n.a.createElement("h3", null, "4 Actions"), n.a.createElement("h4", null, " Will lead you to success")),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "action" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "action__item" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "action__header" },
                                                                    n.a.createElement("h5", null, " register your tron \u200b\u200bwallet"),
                                                                    n.a.createElement(
                                                                        "i",
                                                                        { className: "red" },
                                                                        n.a.createElement(
                                                                            "div",
                                                                            null,
                                                                            n.a.createElement("svg", { height: "2.6rem", width: "2.2rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#tron" }))
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "p",
                                                                    { className: "m-none" },
                                                                    "To get started, you need to register a wallet that works with the TRON (TRX) cryptocurrency.  We recommend using TronLink or TronWallet wallets to work with the Web site.  In case you are using a smartphone, the TronWallet app will be the best solution!"
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "action__item" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "action__header" },
                                                                    n.a.createElement("h5", null, "invest in Tronfactory"),
                                                                    n.a.createElement(
                                                                        "i",
                                                                        { className: "blue" },
                                                                        n.a.createElement(
                                                                            "div",
                                                                            null,
                                                                            n.a.createElement("svg", { height: "2.47rem", width: "2.3rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#download" }))
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement("p", { className: "m-none" }, "Smart contract Tronfactory generates 20% of the investment amount every day and guarantees 200 % income in 10 days.")
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "action__item" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "action__header" },
                                                                    n.a.createElement("h5", null, "return on investment"),
                                                                    n.a.createElement(
                                                                        "i",
                                                                        { className: "yellow" },
                                                                        n.a.createElement(
                                                                            "div",
                                                                            null,
                                                                            n.a.createElement("svg", { height: "2.47rem", width: "2.3rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#usd" }))
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "p",
                                                                    { className: "m-none" },
                                                                    " Profit (dividends) is credited to your account immediately after making an investment.  You can withdraw dividends at any time."
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "action__item" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "action__header" },
                                                                    n.a.createElement("h5", null, "profit from referrals"),
                                                                    n.a.createElement(
                                                                        "i",
                                                                        { className: "green" },
                                                                        n.a.createElement(
                                                                            "div",
                                                                            null,
                                                                            n.a.createElement("svg", { height: "2.47rem", width: "2.3rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user2" }))
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "p",
                                                                    { className: "m-none" },
                                                                    " Earn additional income by referring new users.  A two-level referral program allows you to earn 10 % + 3 % + 2 % of the investment amount of invited investors."
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "footer" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "container footer-container" },
                                                    n.a.createElement("a", { href: "#", className: "m-none logo" }, n.a.createElement("img", { src: "assests/static/img/svg/logo.svg", alt: "" })),
                                                    n.a.createElement("div", { style: { color: "black" }, className: "copyright m-none" }, "\xa9 All rights reserved"),
                                                    n.a.createElement(
                                                        "ul",
                                                        { className: "footer__menu" },
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { href: "#", "data-toggle": "ref" },
                                                                n.a.createElement(
                                                                    "svg",
                                                                    { height: "2.2rem", width: "2.6rem", fill: "#EC368C", className: "m-none" },
                                                                    n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user" })
                                                                ),
                                                                "Referral "
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { href: "https://tronfactory.vip/tronfactory_audit_report.pdf", target: "_blank" },
                                                                n.a.createElement(
                                                                    "svg",
                                                                    { height: "1.7rem", width: "1.72rem", fill: "#EC368C", className: "m-none" },
                                                                    n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" })
                                                                ),
                                                                "Audit Report"
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "ul",
                                                        { className: "soc" },
                                                        n.a.createElement(
                                                            "li",
                                                            null,
                                                            n.a.createElement(
                                                                "a",
                                                                { href: "https://t.me/TronFactoryVIP", target: "_blank" },
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#telegram" }))
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.a.createElement("div", { className: "footer__footer d-none" }, "\xa9 All rights reserved")
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal", "data-modal": "menu" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__header" },
                                                            n.a.createElement(
                                                                "ul",
                                                                null,
                                                                n.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "a",
                                                                        { href: "https://t.me/TronFactoryVIP", target: "_blank" },
                                                                        n.a.createElement("svg", { height: "2.2rem", width: "2.6rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#telegram" }))
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "button",
                                                                null,
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close" }))
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__content modal-menu" },
                                                            n.a.createElement(
                                                                "ul",
                                                                null,
                                                                n.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "a",
                                                                        { href: "#", "data-toggle": "faq", className: "btn" },
                                                                        "F.a.q.",
                                                                        n.a.createElement("svg", { height: "1.9rem", width: "1.2rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#what" }))
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "a",
                                                                        { href: "#", className: "btn", "data-toggle": "ref" },
                                                                        "Referrals",
                                                                        n.a.createElement("img", { src: "assests/static/img/svg/main/pazl.svg", alt: "" })
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "a",
                                                                        { target: "_blank", href: "https://tronfactory.vip/tronfactory_audit_report.pdf", className: "btn" },
                                                                        "Audit Report",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "modal-stats" },
                                                                n.a.createElement("div", { className: "modal-stats__item" }, n.a.createElement("span", null, "Investors:"), n.a.createElement("b", null, this.state.total_team)),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "modal-stats__item" },
                                                                    n.a.createElement("span", null, "Invested:"),
                                                                    n.a.createElement("b", null, this.state.player_total_investment, " TRX")
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal", "data-modal": "login" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container modal-login" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "button",
                                                            { className: "close-modal m-none" },
                                                            n.a.createElement("svg", { height: "1.5rem", width: "1.5rem", fill: "#B2B2C4" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close2" }))
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__header" },
                                                            n.a.createElement(
                                                                "ul",
                                                                null,
                                                                n.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "a",
                                                                        { href: "https://t.me/TronFactoryVIP", target: "_blank" },
                                                                        n.a.createElement("svg", { height: "2.2rem", width: "2.6rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#telegram" }))
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "button",
                                                                null,
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close" }))
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__content" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "modal-login__desc" },
                                                                n.a.createElement("h2", { className: "m-none text-gradient" }, "Authorize "),
                                                                n.a.createElement(
                                                                    "p",
                                                                    { className: "d-none" },
                                                                    "Please login to your Tron wallet.  If you haven\u2019t downloaded yet the ",
                                                                    n.a.createElement("b", null, " TronLink "),
                                                                    " browser extension or the ",
                                                                    n.a.createElement("b", null, " TronWallet "),
                                                                    " application for your smartphone, you can install it by clicking on the button below."
                                                                ),
                                                                n.a.createElement(
                                                                    "p",
                                                                    { className: "m-none" },
                                                                    "Please login to your Tron wallet.  If you haven\u2019t downloaded yet the ",
                                                                    n.a.createElement("b", null, " TronLink "),
                                                                    " browser extension or the ",
                                                                    n.a.createElement("b", null, " TronWallet "),
                                                                    " application for your smartphone, you can install it by clicking on the button below."
                                                                ),
                                                                n.a.createElement("p", { className: "m-none" }, n.a.createElement("b", null, " Make sure you are on the mainnet network, do not use a test network."))
                                                            ),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "modal-login__footer" },
                                                                n.a.createElement(
                                                                    "a",
                                                                    { href: "https://www.tronlink.org/", target: "_blank", className: "btn" },
                                                                    "Tron link",
                                                                    n.a.createElement("svg", { height: "2.1rem", width: "2rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#tron" }))
                                                                ),
                                                                n.a.createElement(
                                                                    "a",
                                                                    { href: "https://www.tronwallet.me/", target: "_blank", className: "btn" },
                                                                    "Tron wallet",
                                                                    n.a.createElement("svg", { height: "2.1rem", width: "2rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#tron" }))
                                                                )
                                                            ),
                                                            n.a.createElement("p", { className: "d-none" }, " Make sure you are on the mainnet network, do not use a test network.")
                                                        )
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal", "data-modal": "lang" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container modal-lang" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "button",
                                                            { className: "close-modal m-none" },
                                                            n.a.createElement("svg", { height: "1.5rem", width: "1.5rem", fill: "#B2B2C4" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close2" }))
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__header" },
                                                            n.a.createElement(
                                                                "a",
                                                                { href: "#", "data-toggle": "back" },
                                                                n.a.createElement("svg", { height: "1.3rem", width: ".89rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" })),
                                                                "back"
                                                            ),
                                                            n.a.createElement(
                                                                "button",
                                                                null,
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close" }))
                                                            )
                                                        ),
                                                        n.a.createElement("div", { className: "modal__content" })
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal ", "data-modal": "ref" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container modal-ref" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "button",
                                                            { className: "close-modal m-none" },
                                                            n.a.createElement("svg", { height: "1.5rem", width: "1.5rem", fill: "#B2B2C4" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close2" }))
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__content" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "ref-info" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "ref-info__header" },
                                                                    n.a.createElement("h2", { className: "text-gradient" }, "Referral program"),
                                                                    n.a.createElement(
                                                                        "p",
                                                                        null,
                                                                        " Referral reward Tronfactory is the accrual of additional funds to users for attracting new investors to the fund. New investors who joined Tronfactory through your referral link will become your 1st level referrals.  All those who are invited to your fund referral of the 1st level, become your referrals of the 2nd level and also bring you additional profit."
                                                                    ),
                                                                    n.a.createElement(
                                                                        "p",
                                                                        { className: "m-none" },
                                                                        n.a.createElement("b", null, "The referral reward is credited in TRX to your account.  You can withdraw it to your wallet at any time.")
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "ref-info__level" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-info__level--item" },
                                                                        n.a.createElement("h3", { className: "text-gradient" }, "10%"),
                                                                        " ",
                                                                        n.a.createElement("span", null, " reward from 1st level referrals")
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-info__level--item" },
                                                                        n.a.createElement("h3", { className: "text-gradient--blue " }, "3%"),
                                                                        " ",
                                                                        n.a.createElement("span", null, "reward from 2nd level referrals")
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-info__level--item" },
                                                                        n.a.createElement("h3", { className: "text-gradient--blue " }, "2%"),
                                                                        " ",
                                                                        n.a.createElement("span", null, "Reward from 3rd level referrals")
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "ref-info__footer d-none" },
                                                                    n.a.createElement("p", null, "The referral reward is credited in TRX to your account.  You can withdraw it to your wallet at any time.")
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal", "data-modal": "promo" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container modal-promo" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "button",
                                                            { className: "close-modal m-none" },
                                                            n.a.createElement("svg", { height: "1.5rem", width: "1.5rem", fill: "#B2B2C4" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close2" }))
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__content" },
                                                            n.a.createElement(
                                                                "ul",
                                                                null,
                                                                n.a.createElement("li", null, "125x125"),
                                                                n.a.createElement("li", null, "240x400"),
                                                                n.a.createElement("li", null, "300x300"),
                                                                n.a.createElement("li", null, "468x60"),
                                                                n.a.createElement("li", null, "720x90")
                                                            ),
                                                            n.a.createElement("div", { className: "banner__result" }, n.a.createElement("img", null)),
                                                            n.a.createElement("h3", null, " YOUR BANNER LINK SIZE  [get_banner.size]"),
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "promo__code" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "code",
                                                                        null,
                                                                        '<a\xa0href="https://20x9.com/?referral=[user]">',
                                                                        n.a.createElement("br", null),
                                                                        '\xa0<img src="https://20x9.com/static/banners/static/banners/[get_banner.img].gif"/>',
                                                                        n.a.createElement("br", null),
                                                                        "</a>"
                                                                    )
                                                                ),
                                                                n.a.createElement("input", { type: "text", id: "ref_banner", style: { opacity: 0, position: "absolute", zIndex: -1 } }),
                                                                n.a.createElement("button", null, n.a.createElement("img", { src: "assests/static/img/svg/copy.svg", alt: "" }))
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal", "data-modal": "refstat" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container modal-refstat" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "button",
                                                            { className: "close-modal m-none" },
                                                            n.a.createElement("svg", { height: "1.5rem", width: "1.5rem", fill: "#B2B2C4" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close2" }))
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__header" },
                                                            n.a.createElement(
                                                                "ul",
                                                                null,
                                                                n.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "a",
                                                                        { href: "https://t.me/TronFactoryVIP", target: "_blank" },
                                                                        n.a.createElement("svg", { height: "2.2rem", width: "2.6rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#telegram" }))
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "button",
                                                                null,
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close" }))
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__content" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "modal-refstat__content", "v-if": "referal_stat.level1" },
                                                                n.a.createElement("h2", null, "Referral rewards statistics"),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "ref-list d-none" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-list__item" },
                                                                        n.a.createElement("span", null, "Lvl 1:"),
                                                                        n.a.createElement(
                                                                            "span",
                                                                            null,
                                                                            "[referal_stat.level1.count] ",
                                                                            n.a.createElement(
                                                                                "svg",
                                                                                { height: "1.2rem", width: "1.2rem", fill: "#fff" },
                                                                                " ",
                                                                                n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user2" })
                                                                            ),
                                                                            "/  [parseFloat(referal_stat.level1.amount/1000000).toFixed(2)] ",
                                                                            n.a.createElement("span", null, "TRX")
                                                                        )
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-list__item" },
                                                                        n.a.createElement("span", null, "Lvl 2:"),
                                                                        n.a.createElement(
                                                                            "span",
                                                                            null,
                                                                            "[referal_stat.level2.count] ",
                                                                            n.a.createElement(
                                                                                "svg",
                                                                                { height: "1.2rem", width: "1.2rem", fill: "#fff" },
                                                                                " ",
                                                                                n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user2" })
                                                                            ),
                                                                            "/  [parseFloat(referal_stat.level2.amount/1000000).toFixed(2)] ",
                                                                            n.a.createElement("span", null, "TRX")
                                                                        )
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-list__item" },
                                                                        n.a.createElement("span", null, "total:"),
                                                                        n.a.createElement(
                                                                            "span",
                                                                            null,
                                                                            "[referal_stat.level2.count + referal_stat.level1.count] ",
                                                                            n.a.createElement(
                                                                                "svg",
                                                                                { height: "1.2rem", width: "1.2rem", fill: "#fff" },
                                                                                " ",
                                                                                n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#user2" })
                                                                            ),
                                                                            "/  [parseFloat((referal_stat.level1.amount + referal_stat.level2.amount)/1000000).toFixed(2)] ",
                                                                            n.a.createElement("span", null, "TRX")
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "ref-stat", "v-for": "ref in referral_statistics" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-stat__left d-none" },
                                                                        n.a.createElement("h3", { className: "text-gradient" }, "[ref.level] level:"),
                                                                        n.a.createElement("h3", { className: "text-gradient" }, "accrued:"),
                                                                        n.a.createElement(
                                                                            "h3",
                                                                            null,
                                                                            n.a.createElement("img", { src: "assests/static/img/svg/clock.svg", alt: "" }),
                                                                            n.a.createElement("span", { className: "text-gradient" }, "date:")
                                                                        )
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "ref-stat__right" },
                                                                        n.a.createElement("h3", null, n.a.createElement("span", { className: "m-none" }, "Referral:"), " [short_user(ref.user)]"),
                                                                        n.a.createElement("h3", null, n.a.createElement("span", { className: "m-none" }, "Accrued:"), "[parseFloat(ref.amount/1000000).toFixed(2)] TRX"),
                                                                        n.a.createElement(
                                                                            "h3",
                                                                            null,
                                                                            n.a.createElement(
                                                                                "span",
                                                                                { className: "m-none" },
                                                                                n.a.createElement(
                                                                                    "svg",
                                                                                    { height: "1.4rem", width: "1.4rem", fill: "#5E91F4" },
                                                                                    n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#clock" })
                                                                                )
                                                                            ),
                                                                            "[ref.date]"
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal", "data-modal": "register" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container register" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__header" },
                                                            n.a.createElement(
                                                                "ul",
                                                                null,
                                                                n.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    n.a.createElement(
                                                                        "a",
                                                                        { href: "https://t.me/TronFactoryVIP", target: "_blank" },
                                                                        n.a.createElement("svg", { height: "2.2rem", width: "2.6rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#telegram" }))
                                                                    )
                                                                ),
                                                                n.a.createElement("li", null, n.a.createElement("a", { href: "#", "data-toggle": "lang" }, n.a.createElement("img", { src: "assests/static/img/png/flags/en.png", alt: "" })))
                                                            ),
                                                            n.a.createElement(
                                                                "button",
                                                                null,
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close" }))
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__content" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "register__content" },
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "icon" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        null,
                                                                        n.a.createElement("svg", { height: "3.4rem", width: "2.9rem", fill: "#fff" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#tron" }))
                                                                    )
                                                                ),
                                                                n.a.createElement("h2", { className: "text-gradient" }, "register your tron wallet"),
                                                                n.a.createElement(
                                                                    "p",
                                                                    null,
                                                                    "Tronfactory referral reward consists in the accrual of additional income to users for attracting new investors to the fund. New investors who joined Tronfactory using your referral link become your referrals of 1st level. All those who are invited to the fund by your 1st level referral become your 2nd level referrals and also bring you additional profit."
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "modal", "data-modal": "faq" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "modal-container modal__faq" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        n.a.createElement(
                                                            "button",
                                                            { className: "close-modal m-none" },
                                                            n.a.createElement("svg", { height: "1.5rem", width: "1.5rem", fill: "#B2B2C4" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close2" }))
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__header" },
                                                            n.a.createElement(
                                                                "button",
                                                                null,
                                                                n.a.createElement("svg", { height: "2.2rem", width: "2.6rem" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#close" }))
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "modal__content" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "faq" },
                                                                n.a.createElement("h2", { className: "m-none text-gradient" }, "Frequently asked questions"),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "faq__item" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__header" },
                                                                        "How to start to invest",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__answer" },
                                                                        n.a.createElement(
                                                                            "p",
                                                                            null,
                                                                            "To start investing in Tronfactory, you need to install the TronLink extension for your browser.  You can download it from the Chrome Web Store.  If you prefer to work with the website using your smartphone, you should install the TronWallet app.  You can download it from Google Play or the App Store."
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "faq__item" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__header" },
                                                                        "How to invest on computer ?",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__answer" },
                                                                        n.a.createElement(
                                                                            "p",
                                                                            null,
                                                                            'First, you need to install the TronLink extension for the Google Chrome browser. Next, using the app, create a wallet and top up your TRX balance.  Go to the Tronfactory website by opening a new tab in your browser.  Please note that if you are logged into your TronLink wallet, you will be automatically logged into our website. By clicking on the "Investment" button, you will go to the form for creating your investment.  In this form, you must indicate the amount to be invested. Make sure that you have indicated the amount you have in your wallet and click the "Invest" button.'
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "faq__item" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__header" },
                                                                        " How to invest from your mobile?",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__answer" },
                                                                        n.a.createElement(
                                                                            "p",
                                                                            null,
                                                                            'After you have installed the TronWallet application, you should create your wallet and top up your TRX balance.  Click the browser icon and enter Tronfactory in the search bar.  Now you can make an investment by clicking the "Invest" button and filling out the form.'
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "faq__item" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__header" },
                                                                        " How do I calculate my profit?",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__answer" },
                                                                        n.a.createElement("p", null, "The income that your investment will bring can be calculated using the calculator located on the home page of the site.")
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "faq__item" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__header" },
                                                                        "How often can I withdraw the dividends?",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__answer" },
                                                                        n.a.createElement(
                                                                            "p",
                                                                            null,
                                                                            'You can withdraw the accumulated dividends at any time by clicking the "Withdraw" button.  Please note that with each withdrawal request, there will be a transaction fee of approximately 3 TRX.  Dividends will be paid through a smart contract exclusively to the wallet from which the investment was made.'
                                                                        )
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "faq__item" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__header" },
                                                                        " Can I create multiple investments?",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__answer" },
                                                                        n.a.createElement("p", null, "Yes, you can make an unlimited investment.  Each investment will be profitable separately from the others.")
                                                                    )
                                                                ),
                                                                n.a.createElement(
                                                                    "div",
                                                                    { className: "faq__item" },
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__header" },
                                                                        "How to receive referral rewards?",
                                                                        n.a.createElement("svg", { height: "1.7rem", width: "1.72rem", fill: "#EC368C" }, n.a.createElement("use", { xlinkHref: "assests/static/img/svg/sprite.svg#arrow" }))
                                                                    ),
                                                                    n.a.createElement(
                                                                        "div",
                                                                        { className: "faq__answer" },
                                                                        n.a.createElement(
                                                                            "p",
                                                                            null,
                                                                            "Each Tronfactory user is assigned a unique referral link.  You will find it in the \u201cReferrals\u201d section.  There are also promotional materials available for you.  Invite your friends and partners, and get 10 %  rewards from the investment amount of your 1st level referrals and 3 % + 2% rewards from the investment amount of your 2nd level referrals."
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement("div", { className: "modal__footer" }, "\xa9 All rights reserved")
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(n.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            s.a.render(n.a.createElement(n.a.StrictMode, null, n.a.createElement(w, null)), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister();
                        })
                        .catch(function (e) {
                            console.error(e.message);
                        });
        },
        60: function (e, t, a) {
            e.exports = a(207);
        },
        65: function (e, t, a) {},
        76: function (e, t, a) {},
    },
    [[60, 1, 2]],
]);
