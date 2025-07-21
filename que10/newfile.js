// 1. __dirname - Current directory
console.log("📁 Current directory (__dirname):", __dirname);

// 2. __filename - Current file path
console.log("📄 Current file path (__filename):", __filename);

// 3. setTimeout - Delay execution
setTimeout(() => {
  console.log("⏰ setTimeout: This message is shown after 2 seconds");
}, 2000);

// 4. setInterval - Repeating execution (once here, then cleared)
const intervalId = setInterval(() => {
  console.log("🔁 setInterval: This message repeats every 1 second (just once for demo)");
  clearInterval(intervalId); // Clear immediately after first run
}, 1000);

// 5. console - Logging
console.log("📝 console.log: Hello from Node.js global object!");

// 6. process - Info about current Node process
console.log("⚙️ process.version:", process.version);
console.log("🖥️ process.platform:", process.platform);
console.log("📦 process.cwd() (Current Working Directory):", process.cwd());

// 7. Buffer - Handle binary data
const buf = Buffer.from("Hello Buffer!");
console.log("🧠 Buffer content:", buf.toString());