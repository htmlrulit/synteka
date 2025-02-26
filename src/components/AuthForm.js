import React, { useState } from 'react';

const AuthForm = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        loginIdentifier: '',
        loginPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка данных:', formData);
    };

    return (
        <div className="auth-container">
            <header className="auth-header">
                <img src = "logo.png" width="128px" height="128px" alt="СИНТЕКА"></img>
            </header>
            <div className="auth-tabs">
                <button
                    className={activeTab === 'login' ? 'active' : ''}
                    onClick={() => setActiveTab('login')}
                >
                    Вход
                </button>
                <button
                    className={activeTab === 'register' ? 'active' : ''}
                    onClick={() => setActiveTab('register')}
                >
                    Регистрация
                </button>
            </div>
            <div className="auth-form">
                {activeTab === 'login' && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="loginIdentifier">Email или Телефон</label>
                            <input
                                type="text"
                                id="loginIdentifier"
                                name="loginIdentifier"
                                value={formData.loginIdentifier}
                                onChange={handleChange}
                                placeholder="Введите email или телефон"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Пароль</label>
                            <input
                                type="password"
                                id="loginPassword"
                                name="loginPassword"
                                value={formData.loginPassword}
                                onChange={handleChange}
                                placeholder="Введите пароль"
                                required
                            />
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="rememberMe" name="rememberMe" />
                            <label htmlFor="rememberMe">Запомнить меня</label>
                        </div>
                        <button type="submit" className="submit-button">
                            Войти
                        </button>
                        <div className="form-footer">
                            <a href="#!" onClick={() => alert('Функционал восстановления пароля')}>
                                Забыли пароль?
                            </a>
                        </div>
                    </form>
                )}
                {activeTab === 'register' && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">Имя</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Введите имя"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Фамилия</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Введите фамилию"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Введите email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Введите телефон"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Введите пароль"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Подтверждение пароля</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Повторите пароль"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            Зарегистрироваться
                        </button>
                        <div className="form-footer">
                            <small>
                                После регистрации будет отправлено письмо для подтверждения аккаунта.
                            </small>
                        </div>
                    </form>
                )}
            </div>
            <footer className="auth-footer">
                <small>
                    Ваши данные пока что не защищены <span role="img" aria-label="lock">🔒</span>
                </small>
            </footer>
        </div>
    );
};

export default AuthForm;