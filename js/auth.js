// ============================================================
// MEDINTERNOS ENARM
// SISTEMA DE AUTENTICACIÓN
// ============================================================

(function () {

    const SITE_URL =
        "https://drmedinternosarresidentes-lgtm.github.io/MEDINTERNOS-ENARM/";

    // --------------------------------------------------------
    // ESTILOS DEL SISTEMA DE AUTENTICACIÓN
    // --------------------------------------------------------

    const estilos = document.createElement("style");

    estilos.textContent = `

        .auth-user-area {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: auto;
        }

        .auth-button {
            border: none;
            border-radius: 10px;
            padding: 10px 16px;
            font-weight: 700;
            cursor: pointer;
            transition: .2s ease;
            font-family: inherit;
        }

        .auth-login-button {
            background: #0f6fae;
            color: white;
        }

        .auth-login-button:hover {
            background: #095b91;
            transform: translateY(-1px);
        }

        .auth-user-button {
            background: #eaf7f7;
            color: #075c69;
            border: 1px solid #b8dfe3;
        }

        .auth-user-button:hover {
            background: #d9f0f1;
        }

        .auth-modal {
            position: fixed;
            inset: 0;
            background: rgba(5, 24, 40, .72);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            padding: 20px;
        }

        .auth-modal.active {
            display: flex;
        }

        .auth-card {
            width: min(430px, 100%);
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 25px 80px rgba(0,0,0,.25);
            position: relative;
        }

        .auth-close {
            position: absolute;
            right: 18px;
            top: 14px;
            border: none;
            background: transparent;
            font-size: 25px;
            cursor: pointer;
            color: #64748b;
        }

        .auth-logo {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            background: linear-gradient(135deg, #0f6fae, #13b7b0);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: 800;
            margin-bottom: 16px;
        }

        .auth-title {
            margin: 0 0 7px;
            color: #12344d;
            font-size: 25px;
        }

        .auth-subtitle {
            margin: 0 0 22px;
            color: #64748b;
            font-size: 14px;
            line-height: 1.5;
        }

        .auth-label {
            display: block;
            margin: 14px 0 7px;
            font-size: 13px;
            font-weight: 700;
            color: #334155;
        }

        .auth-input {
            width: 100%;
            box-sizing: border-box;
            padding: 12px 13px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            font-size: 15px;
            outline: none;
            transition: .2s;
        }

        .auth-input:focus {
            border-color: #0f6fae;
            box-shadow: 0 0 0 3px rgba(15,111,174,.12);
        }

        .auth-submit {
            width: 100%;
            margin-top: 20px;
            padding: 13px;
            border: none;
            border-radius: 10px;
            background: #0f6fae;
            color: white;
            font-size: 15px;
            font-weight: 800;
            cursor: pointer;
        }

        .auth-submit:hover {
            background: #095b91;
        }

        .auth-secondary {
            width: 100%;
            margin-top: 10px;
            padding: 10px;
            border: none;
            background: transparent;
            color: #0f6fae;
            font-weight: 700;
            cursor: pointer;
        }

        .auth-message {
            margin-top: 15px;
            padding: 11px 12px;
            border-radius: 9px;
            font-size: 13px;
            line-height: 1.45;
            display: none;
        }

        .auth-message.success {
            display: block;
            background: #ecfdf5;
            color: #047857;
            border: 1px solid #a7f3d0;
        }

        .auth-message.error {
            display: block;
            background: #fef2f2;
            color: #b91c1c;
            border: 1px solid #fecaca;
        }

        .auth-account-menu {
            position: fixed;
            right: 22px;
            top: 70px;
            background: white;
            border: 1px solid #dbe4ec;
            border-radius: 14px;
            box-shadow: 0 15px 40px rgba(0,0,0,.16);
            padding: 8px;
            width: 230px;
            display: none;
            z-index: 99998;
        }

        .auth-account-menu.active {
            display: block;
        }

        .auth-account-email {
            padding: 12px;
            font-size: 12px;
            color: #64748b;
            word-break: break-word;
            border-bottom: 1px solid #e2e8f0;
            margin-bottom: 5px;
        }

        .auth-menu-item {
            width: 100%;
            text-align: left;
            border: none;
            background: transparent;
            padding: 11px 12px;
            border-radius: 9px;
            cursor: pointer;
            font-weight: 600;
            color: #334155;
        }

        .auth-menu-item:hover {
            background: #f1f5f9;
        }

        .auth-menu-item.logout {
            color: #b91c1c;
        }

        @media (max-width: 700px) {

            .auth-user-area {
                margin-left: 0;
            }

            .auth-login-button,
            .auth-user-button {
                padding: 8px 11px;
                font-size: 12px;
            }

            .auth-card {
                padding: 24px;
            }

        }

    `;

    document.head.appendChild(estilos);


    // --------------------------------------------------------
    // CREAR INTERFAZ
    // --------------------------------------------------------

    function crearInterfaz() {

        if (document.getElementById("auth-modal")) {
            return;
        }

        // Área del usuario
        const userArea = document.createElement("div");
        userArea.id = "auth-user-area";
        userArea.className = "auth-user-area";

        const loginButton = document.createElement("button");
        loginButton.className = "auth-button auth-login-button";
        loginButton.textContent = "Iniciar sesión";

        userArea.appendChild(loginButton);

        // Intentamos colocar el botón dentro del header
        const header = document.querySelector("header");

        if (header) {
            header.appendChild(userArea);
        } else {
            document.body.appendChild(userArea);
        }

        // ----------------------------------------------------
        // MODAL
        // ----------------------------------------------------

        const modal = document.createElement("div");
        modal.id = "auth-modal";
        modal.className = "auth-modal";

        modal.innerHTML = `
            <div class="auth-card">

                <button
                    class="auth-close"
                    id="auth-close"
                    aria-label="Cerrar">
                    ×
                </button>

                <div class="auth-logo">M</div>

                <h2 class="auth-title" id="auth-title">
                    Iniciar sesión
                </h2>

                <p class="auth-subtitle" id="auth-subtitle">
                    Accede a tu cuenta para guardar tu progreso ENARM.
                </p>

                <form id="auth-form">

                    <label class="auth-label">
                        Correo electrónico
                    </label>

                    <input
                        id="auth-email"
                        class="auth-input"
                        type="email"
                        autocomplete="email"
                        required
                        placeholder="correo@ejemplo.com">

                    <label class="auth-label">
                        Contraseña
                    </label>

                    <input
                        id="auth-password"
                        class="auth-input"
                        type="password"
                        autocomplete="current-password"
                        required
                        minlength="6"
                        placeholder="Mínimo 6 caracteres">

                    <div
                        id="auth-confirm-container"
                        style="display:none;">

                        <label class="auth-label">
                            Confirmar contraseña
                        </label>

                        <input
                            id="auth-password-confirm"
                            class="auth-input"
                            type="password"
                            autocomplete="new-password"
                            minlength="6"
                            placeholder="Repite tu contraseña">

                    </div>

                    <button
                        id="auth-submit"
                        class="auth-submit"
                        type="submit">
                        Iniciar sesión
                    </button>

                </form>

                <div
                    id="auth-message"
                    class="auth-message">
                </div>

                <button
                    id="auth-mode-button"
                    class="auth-secondary">
                    Crear una cuenta
                </button>

                <button
                    id="auth-recovery-button"
                    class="auth-secondary">
                    ¿Olvidaste tu contraseña?
                </button>

            </div>
        `;

        document.body.appendChild(modal);

        // ----------------------------------------------------
        // MENÚ DE CUENTA
        // ----------------------------------------------------

        const accountMenu = document.createElement("div");

        accountMenu.id = "auth-account-menu";
        accountMenu.className = "auth-account-menu";

        accountMenu.innerHTML = `
            <div
                id="auth-account-email"
                class="auth-account-email">
            </div>

            <button
                id="auth-account-progress"
                class="auth-menu-item">
                📊 Mi progreso
            </button>

            <button
                id="auth-account-history"
                class="auth-menu-item">
                📚 Mi historial
            </button>

            <button
                id="auth-logout"
                class="auth-menu-item logout">
                Cerrar sesión
            </button>
        `;

        document.body.appendChild(accountMenu);

        // ----------------------------------------------------
        // REFERENCIAS
        // ----------------------------------------------------

        const authModal = document.getElementById("auth-modal");
        const authClose = document.getElementById("auth-close");
        const authForm = document.getElementById("auth-form");
        const authTitle = document.getElementById("auth-title");
        const authSubtitle = document.getElementById("auth-subtitle");
        const authSubmit = document.getElementById("auth-submit");
        const authModeButton = document.getElementById("auth-mode-button");
        const authRecoveryButton = document.getElementById("auth-recovery-button");
        const authMessage = document.getElementById("auth-message");
        const passwordConfirmContainer =
            document.getElementById("auth-confirm-container");

        let modo = "login";

        // ----------------------------------------------------
        // MENSAJES
        // ----------------------------------------------------

        function mensaje(texto, tipo = "success") {

            authMessage.textContent = texto;
            authMessage.className = "auth-message " + tipo;

        }

        function limpiarMensaje() {

            authMessage.textContent = "";
            authMessage.className = "auth-message";

        }

        // ----------------------------------------------------
        // ABRIR / CERRAR
        // ----------------------------------------------------

        function abrirLogin() {

            authModal.classList.add("active");
            accountMenu.classList.remove("active");

        }

        function cerrarLogin() {

            authModal.classList.remove("active");
            limpiarMensaje();

        }

        loginButton.addEventListener("click", abrirLogin);

        authClose.addEventListener("click", cerrarLogin);

        authModal.addEventListener("click", function (event) {

            if (event.target === authModal) {
                cerrarLogin();
            }

        });

        // ----------------------------------------------------
        // CAMBIAR LOGIN / REGISTRO
        // ----------------------------------------------------

        authModeButton.addEventListener("click", function () {

            limpiarMensaje();

            if (modo === "login") {

                modo = "signup";

                authTitle.textContent = "Crear cuenta";
                authSubtitle.textContent =
                    "Crea tu cuenta para guardar tu progreso ENARM.";
                authSubmit.textContent = "Crear cuenta";

                passwordConfirmContainer.style.display = "block";

                authModeButton.textContent =
                    "Ya tengo una cuenta";

                authRecoveryButton.style.display = "none";

            } else {

                modo = "login";

                authTitle.textContent = "Iniciar sesión";
                authSubtitle.textContent =
                    "Accede a tu cuenta para guardar tu progreso ENARM.";
                authSubmit.textContent = "Iniciar sesión";

                passwordConfirmContainer.style.display = "none";

                authModeButton.textContent =
                    "Crear una cuenta";

                authRecoveryButton.style.display = "block";

            }

        });

        // ----------------------------------------------------
        // REGISTRO / LOGIN
        // ----------------------------------------------------

        authForm.addEventListener("submit", async function (event) {

            event.preventDefault();

            limpiarMensaje();

            const email =
                document.getElementById("auth-email").value.trim();

            const password =
                document.getElementById("auth-password").value;

            if (!window.supabaseClient) {

                mensaje(
                    "No se pudo conectar con el sistema de autenticación.",
                    "error"
                );

                return;
            }

            authSubmit.disabled = true;

            try {

                if (modo === "signup") {

                    const passwordConfirm =
                        document.getElementById("auth-password-confirm").value;

                    if (password !== passwordConfirm) {

                        mensaje(
                            "Las contraseñas no coinciden.",
                            "error"
                        );

                        authSubmit.disabled = false;
                        return;
                    }

                    const { data, error } =
                        await window.supabaseClient.auth.signUp({
                            email: email,
                            password: password,
                            options: {
                                emailRedirectTo: SITE_URL
                            }
                        });

                    if (error) {
                        throw error;
                    }

                    if (data.session) {

                        mensaje(
                            "Cuenta creada correctamente. Ya puedes utilizar la plataforma.",
                            "success"
                        );

                    } else {

                        mensaje(
                            "Cuenta creada. Revisa tu correo electrónico y confirma tu cuenta antes de iniciar sesión.",
                            "success"
                        );

                    }

                } else {

                    const { data, error } =
                        await window.supabaseClient.auth.signInWithPassword({
                            email: email,
                            password: password
                        });

                    if (error) {
                        throw error;
                    }

                    mensaje(
                        "Inicio de sesión correcto.",
                        "success"
                    );

                    actualizarUsuario(data.user);

                    setTimeout(() => {
                        cerrarLogin();
                    }, 700);

                }

            } catch (error) {

                console.error("Error de autenticación:", error);

                mensaje(
                    traducirError(error),
                    "error"
                );

            } finally {

                authSubmit.disabled = false;

            }

        });

        // ----------------------------------------------------
        // RECUPERACIÓN DE CONTRASEÑA
        // ----------------------------------------------------

        authRecoveryButton.addEventListener("click", async function () {

            limpiarMensaje();

            const email =
                document.getElementById("auth-email").value.trim();

            if (!email) {

                mensaje(
                    "Escribe primero tu correo electrónico.",
                    "error"
                );

                return;
            }

            try {

                const { error } =
                    await window.supabaseClient.auth.resetPasswordForEmail(
                        email,
                        {
                            redirectTo: SITE_URL
                        }
                    );

                if (error) {
                    throw error;
                }

                mensaje(
                    "Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña.",
                    "success"
                );

            } catch (error) {

                console.error(error);

                mensaje(
                    traducirError(error),
                    "error"
                );

            }

        });

        // ----------------------------------------------------
        // ESTADO DEL USUARIO
        // ----------------------------------------------------

        function actualizarUsuario(user) {

            const area =
                document.getElementById("auth-user-area");

            if (!user) {

                area.innerHTML = "";

                const button =
                    document.createElement("button");

                button.className =
                    "auth-button auth-login-button";

                button.textContent =
                    "Iniciar sesión";

                button.addEventListener(
                    "click",
                    abrirLogin
                );

                area.appendChild(button);

                return;
            }

            area.innerHTML = "";

            const button =
                document.createElement("button");

            button.className =
                "auth-button auth-user-button";

            button.textContent =
                "👤 Mi cuenta";

            button.addEventListener("click", function () {

                accountMenu.classList.toggle("active");

            });

            area.appendChild(button);

            document.getElementById(
                "auth-account-email"
            ).textContent = user.email || "";

        }

        // ----------------------------------------------------
        // CERRAR SESIÓN
        // ----------------------------------------------------

        document.getElementById(
            "auth-logout"
        ).addEventListener("click", async function () {

            try {

                const { error } =
                    await window.supabaseClient.auth.signOut();

                if (error) {
                    throw error;
                }

                accountMenu.classList.remove("active");

                actualizarUsuario(null);

                console.log("Sesión cerrada correctamente.");

            } catch (error) {

                console.error(
                    "Error al cerrar sesión:",
                    error
                );

            }

        });

        // ----------------------------------------------------
        // BOTONES FUTUROS
        // ----------------------------------------------------

        document.getElementById(
            "auth-account-progress"
        ).addEventListener("click", function () {

            accountMenu.classList.remove("active");

            const boton =
                document.querySelector(
                    '[data-view="progreso"]'
                );

            if (boton) {
                boton.click();
            }

        });

        document.getElementById(
            "auth-account-history"
        ).addEventListener("click", function () {

            accountMenu.classList.remove("active");

            const boton =
                document.querySelector(
                    '[data-view="resultados"]'
                );

            if (boton) {
                boton.click();
            }

        });

        // ----------------------------------------------------
        // SESIÓN EXISTENTE
        // ----------------------------------------------------

        async function comprobarSesion() {

            try {

                const { data, error } =
                    await window.supabaseClient.auth.getSession();

                if (error) {
                    throw error;
                }

                actualizarUsuario(
                    data.session
                        ? data.session.user
                        : null
                );

            } catch (error) {

                console.error(
                    "Error comprobando sesión:",
                    error
                );

            }

        }

        window.supabaseClient.auth.onAuthStateChange(
            function (_event, session) {

                actualizarUsuario(
                    session ? session.user : null
                );

            }
        );

        // ----------------------------------------------------
        // TRADUCCIÓN DE ERRORES
        // ----------------------------------------------------

        function traducirError(error) {

            const mensajeOriginal =
                (error && error.message)
                    ? error.message
                    : "";

            const mensajeLower =
                mensajeOriginal.toLowerCase();

            if (
                mensajeLower.includes("invalid login credentials")
            ) {
                return "Correo o contraseña incorrectos.";
            }

            if (
                mensajeLower.includes("email not confirmed")
            ) {
                return "Debes confirmar tu correo electrónico antes de iniciar sesión.";
            }

            if (
                mensajeLower.includes("user already registered")
            ) {
                return "Ya existe una cuenta con ese correo electrónico.";
            }

            if (
                mensajeLower.includes("password should be at least")
            ) {
                return "La contraseña debe cumplir con la longitud mínima requerida.";
            }

            return mensajeOriginal ||
                "Ocurrió un error de autenticación.";

        }

        // ----------------------------------------------------
        // INICIALIZAR
        // ----------------------------------------------------

        comprobarSesion();

        console.log(
            "Sistema de autenticación MEDINTERNOS ENARM cargado."
        );

    }

    // Esperar a que el DOM esté disponible
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            crearInterfaz
        );

    } else {

        crearInterfaz();

    }

})();
