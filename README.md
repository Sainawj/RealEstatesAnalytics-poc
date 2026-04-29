# 📊 Production-Ready Analytics Implementation (GTM + GA4 + Enhanced Conversions)

A production-ready analytics implementation demonstrating mastery of **Google Tag Manager (GTM)**, **Google Analytics 4 (GA4)**, and **Enhanced Conversions**.

Built with **vanilla HTML, CSS, and JavaScript** to showcase deep technical integration without reliance on backend frameworks.

View App online here - [RealEstatesAnalytics-poc](https://sainawj.github.io/RealEstatesAnalytics-poc/)
<img width="1387" height="889" alt="image" src="https://github.com/user-attachments/assets/ec0ed52d-e2fb-44a4-ad29-2026b42f89d8" />


---

## 🏷️ Repository Tags

`google-analytics-4` `google-tag-manager` `enhanced-conversions` `datalayer` `javascript` `sha-256` `google-apps-script` `conversion-tracking`

---

## 📋 Project Overview

This project serves as a **technical proof-of-concept for high-accuracy lead tracking**.

It bypasses common platform limitations by using a **custom-coded environment** to ensure every user action is captured precisely via the `dataLayer`.

---

## 🚀 Core Features

- **Custom Data Layer**  
  Implements standard GA4 ecommerce JSON payloads for all user interactions.

- **Enhanced Conversions**  
  Uses **SHA-256 hashing** of PII (emails/phones) for secure Google Ads attribution.

- **Automated Workflow**  
  Bookings are automatically saved to **Google Sheets** via Apps Script, with real-time email alerts.

- **Zero-Backend Architecture**  
  Fully hosted on **GitHub Pages**, using Google Sheets as a functional database.

---
---

## 🎯 Conversion Funnel Events

| Step | Event Name       | Trigger                         | Enhanced Conversions |
|------|----------------|---------------------------------|----------------------|
| 1    | view_item_list | User views listings             | ❌ No               |
| 2    | view_item      | User clicks a property          | ❌ No               |
| 3    | add_to_cart    | User clicks "Book Session"      | ❌ No               |
| 4    | generate_lead  | User submits booking form       | ✅ Yes (Email + Phone) |

---

## ⚙️ Quick Setup Guide

### 1. Google Analytics 4 & GTM

- Create a **GA4 Web Stream** and copy the **Measurement ID**
- In **GTM**:
  - Create Data Layer Variables:
    - `ecommerce.items`
    - `ecommerce.value`
    - `enhanced_conversions.email`
    - `enhanced_conversions.phone`
  - Configure Custom Event Triggers for funnel events
  - Publish a **GA4 Event Tag** mapped to `generate_lead`

---

### 2. Google Sheets Database

1. Create a new Google Sheet
2. Rename the first tab to **Bookings**
3. Go to **Extensions → Apps Script**
4. Deploy the provided `Code.gs`
5. Set access to **"Anyone"**
6. Copy the **Web App URL**
7. Paste it into `booking-success.html` under: GOOGLE_SCRIPT_URL

### 3. Deployment

- Update the **GTM Container ID** in all HTML files
- Push code to GitHub
- Enable **GitHub Pages**

---

## 🧪 Testing & Debugging

- **GTM Preview Mode**  
  Ensure tags fire sequentially:view → add_to_cart → generate_lead
- **GA4 DebugView**  
Confirm event parameters and user properties in real-time

- **SHA-256 Validation**  
Check browser console during form submission:
- Output should be a **64-character hash string**

---

## 🔐 Technical Highlight: Secure Hashing

To comply with **GDPR** and **CCPA**, user data is normalized and hashed before transmission.

```javascript
// Example Normalization:
// John.Doe+test@gmail.com -> johndoe@gmail.com

const hashBuffer = await crypto.subtle.digest(
  'SHA-256', 
  new TextEncoder().encode(normalizedEmail)
);
```

---

## 📦 Tech Stack
- HTML5 / CSS3 / JavaScript (Vanilla)
- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)
- Google Ads Enhanced Conversions
- Google Apps Script
- Google Sheets (as database)

## 📝 License

MIT License — Free for personal and commercial use.

## 📬 Contact

Jonathan Saina
📧 sainajonathan@gmail.com

  
