const MAILERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTMzOTViNTMxMTkxYjY0N2VhMjBkMWUxNDk0ZWZkZmIwYjgyOGUyZjVmODA5ZjcyYmExYjk0ZWY2MTJiZDBlNTYyY2EwMjZkMDYzNWQ5YzMiLCJpYXQiOjE3NzI5NjYzNjcuMDgzNDA5LCJuYmYiOjE3NzI5NjYzNjcuMDgzNDEyLCJleHAiOjQ5Mjg2Mzk5NjcuMDc3MTk2LCJzdWIiOiIxMDE1MzMiLCJzY29wZXMiOltdfQ.hBhaZBT_jagq_6LsiHQpp639P-2eB8XQ9KhY88kUknM0UyLhspmQmfJDfde8d9vQ9gc30o85DpZmeVHPcqzkM6rVEHmk5j3GfvJa44KURJ58bV0x1peyZcwqlyPbvc3Ubkd3f3OV06IJalUq_hAcJO7WJYHSFjjXFwnuLguRj58RU36qaFgCY1cxa9THRPDskszTWDroJiogupX5d0UnlQHnTe6Rc0S27W-RHxnjOuIh-IH2IQGIDdpJ6kiE2BWLCJECs3EOa8iDc6D96wHijlcEcY36a4Eggj_IMbDVdJ3stV2duMp1QJHxtuvJBLAJJa70m8QiG87w3t3ZN7IxIt1hQGHdxIm2hSRf5blaq9LL81nsuoVhWbT6RREEn2mjmEu7qgRUM-JQFLEPLUt7lHW2Dl7CkgURT4Z9p3-vifPtvESEnG0u6i9Xk-3ZuJNJVzUCMRuBZDrXxpNTfWv7H-30VgHIxA4UZiI9fMyuXHLibRQw-uMCQSLEDOXz_I5kVOEX2ggTj5S0YaeEpMRWfgzfNuigR_W2CTa6qqlnSd8u0KfUsp4kjKFa-uvHrcicA148kGj5UDr0sOu2d10aFwtNyJJOyVDyTUKkNIcMFzsnySZ6Hvxjog7RIxSsyM-F5jmKMF34VwT5jLiA0ZvAN07u-TkCuE5DaVITxC0X46A'

export function setupSignup() {
  const signupSection = document.getElementById('signup')
  if (!signupSection) return

  const emailInput = signupSection.querySelector('sc-input')
  const submitBtn = signupSection.querySelector('sc-button[slot="action"]')
  if (!emailInput || !submitBtn) return

  emailInput.addEventListener('input', () => {
    if (emailInput.state === 'negative') emailInput.state = 'default'
  })

  submitBtn.addEventListener('click', async () => {
    const email = (emailInput.value ?? '').trim()
    const valid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) { emailInput.state = 'negative'; emailInput.reportValidity(); return }

    const originalLabel = submitBtn.textContent
    submitBtn.textContent = 'Subscribing…'
    submitBtn.setAttribute('disabled', '')

    try {
      const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (res.status === 200 || res.status === 201) {
        submitBtn.textContent = 'Subscribed!'
        emailInput.value = ''
        emailInput.state = 'default'
      } else {
        const data = await res.json().catch(() => ({}))
        const message = data?.message ?? 'Something went wrong'
        console.error('MailerLite:', message)
        submitBtn.textContent = 'Try again'
        submitBtn.removeAttribute('disabled')
        setTimeout(() => { submitBtn.textContent = originalLabel }, 3000)
      }
    } catch {
      submitBtn.textContent = 'Try again'
      submitBtn.removeAttribute('disabled')
      setTimeout(() => { submitBtn.textContent = originalLabel }, 3000)
    }
  })
}
