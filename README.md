# CIG Ecosistema & Red Guerra

Plataforma inteligente y ecosistema digital unificado para empresas, alianzas globales y desarrollo tecnológico.

## 🚀 Cómo Ejecutar en Local

1. **Instalar Dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en Modo Desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🌐 Cómo Lanzar/Desplegar en Internet

Para que los cambios realizados en el código (dentro de la carpeta `/src`) se reflejen en internet, **es obligatorio compilar el proyecto**. La carpeta compilada final que se sube al servidor es `/dist`.

### Opción 1: Despliegue Automático en GitHub Pages (Recomendado)
Hemos configurado un flujo automático con **GitHub Actions** en `.github/workflows/deploy.yml`. 
1. Sube este código a un repositorio en tu cuenta de GitHub.
2. En GitHub, ve a **Settings** (Configuración) de tu repositorio -> **Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions** como la fuente (*Source*).
4. ¡Listo! Cada vez que hagas un `git push` a las ramas `main` o `master`, GitHub compilará y actualizará tu página en internet automáticamente.

### Opción 2: Despliegue en Vercel o Netlify (Súper Fácil)
1. Conecta tu repositorio de GitHub a [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).
2. Configura los parámetros del proyecto de la siguiente manera:
   - **Build Command (Comando de compilación):** `npm run build`
   - **Publish Directory (Carpeta de publicación):** `dist`
3. Haz clic en **Deploy**. El servicio compilará el código de `/src` y generará la versión web actualizada de inmediato.

### Opción 3: Compilación Manual y Servidores Estáticos
Si vas a subir los archivos manualmente por FTP o a un hosting tradicional:
1. Compila el proyecto localmente ejecutando:
   ```bash
   npm run build
   ```
2. Esto generará una carpeta llamada `/dist/`.
3. Sube únicamente los archivos de la carpeta `/dist/` a tu servidor de hosting.

---

## ⚡ Solución a Problemas de Actualización (Caché del Navegador)

Si acabas de actualizar la página pero sigues viendo la versión anterior en internet:
- **Limpieza de Caché (Hard Refresh):** Presiona `Ctrl + F5` (en Windows) o `Cmd + Shift + R` (en Mac) en tu navegador para forzar la recarga de los archivos nuevos.
- **Modo Incógnito:** Abre tu sitio en una ventana privada/incógnito para verificar los cambios en tiempo real sin cookies ni caché retenidos.
- **Base Portátil:** Hemos actualizado la configuración en `vite.config.ts` agregando `base: './'` para que todos los recursos, imágenes y links de la página se enlacen de manera relativa de forma automática, evitando que la página se quede en blanco en subcarpetas de servidores web.
