// ============================================
// Код для формы на vlados-ai.ru
// Вставить в обработчик формы на сайте
// ============================================

// Замени URL на свой production webhook URL из n8n
const N8N_WEBHOOK_URL = 'https://vlados-ai.ru/webhook/vlados-form';
// Если n8n на другом домене:
// const N8N_WEBHOOK_URL = 'https://n8n.vlados-ai.ru/webhook/vlados-form';

async function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Собираем данные формы
  const formData = {
    name: form.querySelector('[name="name"]').value.trim(),
    email: form.querySelector('[name="email"]').value.trim(),
    message: form.querySelector('[name="message"]').value.trim(),
  };

  // Валидация
  if (!formData.name || !formData.email || !formData.message) {
    showNotification('Пожалуйста, заполните все поля', 'error');
    return;
  }

  // UI: показываем загрузку
  submitBtn.disabled = true;
  submitBtn.textContent = 'Отправка...';

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      showNotification('Заявка отправлена! Проверьте почту 📧', 'success');
      form.reset();
    } else {
      throw new Error('Server error');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    showNotification('Ошибка отправки. Попробуйте ещё раз.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

function showNotification(message, type) {
  // Удаляем предыдущее уведомление
  const existing = document.querySelector('.form-notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = 'form-notification';
  notification.textContent = message;
  Object.assign(notification.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    padding: '14px 24px',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '500',
    zIndex: '9999',
    animation: 'slideIn 0.3s ease',
    background: type === 'success'
      ? 'linear-gradient(135deg, #a855f7, #7c3aed)'
      : '#ef4444',
    boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
  });

  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 4000);
}

// Привязка к форме
document.querySelector('form').addEventListener('submit', handleFormSubmit);
