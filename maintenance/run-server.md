# How to Run the Local Server with Live Server

To serve your HTML files locally for development:

1. **Install Live Server Extension**  
   - In VS Code, go to Extensions (`Ctrl+Shift+X`) and search for "Live Server" by Ritwick Dey.
   - Click "Install".

2. **Start the Server**  
   - Open the HTML file you want to serve (e.g., [`comp.html`](comp.html:1)).
   - Right-click anywhere in the editor and select **"Open with Live Server"**.
   - Alternatively, use the Command Palette (`Ctrl+Shift+P`) and type **"Live Server: Open with Live Server"**.

3. **Access the Site**  
   - Your default browser will open at `http://127.0.0.1:5500/` or similar.
   - Any changes you make will auto-refresh in the browser.

> **Note:**  
> The VS Code CLI does not support starting Live Server directly from the terminal. Always use the GUI method above.

---
**Maintenance Tip:**  
Keep this documentation updated in the [`maintenance/`](maintenance/) folder for future reference.