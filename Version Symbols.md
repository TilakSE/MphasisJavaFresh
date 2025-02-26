# Versioning Symbols Cheat Sheet

## 1️⃣ Basic Versioning Symbols

| Symbol | Meaning | Example | Expands To |
|--------|---------|---------|------------|
| `x` or `*` | Wildcard (any version) | `1.2.x`, `1.*` | `1.2.0` to `1.2.999` or `1.0.0` to `1.999.999` |
| `>` | Greater than | `>1.2.3` | `1.2.4` and above |
| `<` | Less than | `<1.2.3` | Any version below `1.2.3` |
| `>=` | Greater than or equal | `>=1.2.3` | `1.2.3` and above |
| `<=` | Less than or equal | `<=1.2.3` | `1.2.3` and below |
| `=` | Exact version | `=1.2.3` | Only `1.2.3` |

---

## 2️⃣ Flexible Versioning Symbols

| Symbol | Meaning | Example | Expands To |
|--------|---------|---------|------------|
| `-` | Version range | `1.2.3 - 1.4.0` | Equivalent to `>=1.2.3 <=1.4.0` |
| `||` | OR (allows multiple versions) | `1.2.3 || 1.4.0` | Either `1.2.3` or `1.4.0` |

---

## 3️⃣ Semantic Versioning (SemVer)

| Symbol | Meaning | Example | Expands To |
|--------|---------|---------|------------|
| `^` | Allow compatible updates | `^1.2.3` | `>=1.2.3 <2.0.0` (within the same major version) |
| `~` | Allow minor updates | `~1.2.3` | `>=1.2.3 <1.3.0` (within the same minor version) |

### **How `^` Works:**

| Given Version | Expands To |
|--------------|-----------|
| `^1.2.3` | `>=1.2.3 <2.0.0` |
| `^0.2.3` | `>=0.2.3 <0.3.0` (because `0.x` versions are unstable) |
| `^0.0.3` | `>=0.0.3 <0.0.4` |

### **How `~` Works:**

| Given Version | Expands To |
|--------------|-----------|
| `~1.2.3` | `>=1.2.3 <1.3.0` |
| `~0.2.3` | `>=0.2.3 <0.3.0` |

---

## 4️⃣ NPM-Specific Symbols

| Symbol | Meaning | Example |
|--------|---------|---------|
| `latest` | Gets the latest stable version | `npm install package@latest` |
| `next` | Gets the next pre-release version | `npm install package@next` |

---

## 📌 Summary

- `^` → Allows updates within the **same major version**.
- `~` → Allows updates within the **same minor version**.
- `x` or `*` → Accepts **any** version.
- `-` → Defines a **range**.
- `||` → Allows **multiple versions**.
