document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Form yuborilganda sahifani qayta yuklamaslik uchun

        // Formdagi ma'lumotlarni olish
        const username = document.getElementById('floatingName').value;
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('password').value;

        try {
            // Serverga POST so'rovi yuborish
            const response = await fetch('/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }), // JSON formatida yuboramiz
            });

            const result = await response.json();

            if (response.ok) {
                alert('Registration successful!');
                // Muvaffaqiyatli ro'yxatdan o'tgandan so'ng, kirish sahifasiga o'tkazamiz
                window.location.href = "/login";
            } else {
                // Xatolik yuzaga kelsa xabarni ko'rsatish
                alert(result.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Serverda xato yuz berdi');
        }
    });
});
