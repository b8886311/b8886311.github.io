// Contact 組件 - 聯絡方式區塊
// 展示各種聯絡方式

import React from 'react';
import './Contact.css';

function Contact() {
  // 聯絡資訊數據
  const contactInfo = [
    {
      label: '信箱',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      label: '電話',
      value: '+886 912 345 678',
      link: 'tel:+886912345678'
    },
    {
      label: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourusername',
      link: 'https://linkedin.com/in/yourusername'
    }
  ];

  return (
    <section className="contact-section">
      <div className="section-container">
        <div className="section-number">05</div>
        
        <div className="section-layout">
          <div className="section-header-left">
            <h2 className="section-title">聯絡我</h2>
          </div>
          
          {/* 聯絡資訊網格 */}
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <a 
                key={index} 
                href={contact.link} 
                className="contact-item"
                target={contact.label.includes('GitHub') || contact.label.includes('LinkedIn') ? '_blank' : undefined}
                rel={contact.label.includes('GitHub') || contact.label.includes('LinkedIn') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-label">{contact.label}</div>
                <div className="contact-value">{contact.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
