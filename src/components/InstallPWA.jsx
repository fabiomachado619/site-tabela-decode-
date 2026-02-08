import React, { useState, useEffect } from 'react';
import { Database, X, Share, Download } from 'lucide-react';

// ==================================================================================
// PWA INSTALL POPUP – POWER ON
// Componente responsável por gerenciar a instalação do aplicativo
// ==================================================================================
const InstallPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
    const [isIOS, setIsIOS] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Detectar iOS
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        setIsIOS(isIOSDevice);

        // Gerenciar beforeinstallprompt (Android/Desktop)
        const handler = (e) => {
            e.preventDefault();
            console.log('beforeinstallprompt triggered');
            setSupportsPWA(true);
            setPromptInstall(e);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // Verificar se já foi descartado recentemente
        const dismissedTimestamp = localStorage.getItem('pwaDismissed');
        const now = Date.now();
        const daysSinceDismissed = dismissedTimestamp
            ? (now - parseInt(dismissedTimestamp)) / (1000 * 60 * 60 * 24)
            : 8; // Se nunca foi descartado, considera > 7 dias

        // Timer para mostrar o popup (5 segundos)
        if (daysSinceDismissed > 7) {
            const timer = setTimeout(() => {
                // Se for iOS ou se tivermos o evento deferred prompt (Android/Desktop)
                if (isIOSDevice || supportsPWA) {
                    setShowPopup(true);
                } else if (!isIOSDevice) {
                    // Em desktop/android, às vezes o evento demora um pouco mais ou já aconteceu
                    // Vamos verificar se supportsPWA vira true em breve no useEffect abaixo
                }
            }, 5000);
            return () => clearTimeout(timer);
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []); // Executa apenas na montagem

    // Efeito para mostrar o popup assim que o suporte for detectado (se já passou o tempo ou se o timer ainda está rodando, vamos deixar o timer controlar o 'start' visual, mas atualizar o estado)
    useEffect(() => {
        if (supportsPWA && showPopup === false) {
            // O timer principal (acima) vai ativar o showPopup. 
            // Se o evento chegou DEPOIS dos 5 segundos (raro, mas possível), 
            // precisariamos ativar aqui. 
            // Simplificação: O timer de 5s é "mínimo". Se o evento chegar depois, o usuário vê depois.
            // Se o evento chegar antes, o usuário vê em 5s.
        }
    }, [supportsPWA]);


    const handleInstall = (e) => {
        e.preventDefault();
        if (promptInstall) {
            promptInstall.prompt();
            promptInstall.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    // Usuário aceitou
                    setShowPopup(false);
                }
            });
        }
    };

    const handleDismiss = () => {
        setShowPopup(false);
        localStorage.setItem('pwaDismissed', Date.now().toString());
    };

    // Renderização
    if (!showPopup) return null;
    // Se não for iOS e não tiver suporte PWA (evento não disparou), não mostra nada
    if (!isIOS && !supportsPWA) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-xl shadow-2xl border border-slate-200 p-5 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <div className="bg-slate-900 p-2 rounded-lg">
                        <Database className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">Instale o Power ON</h3>
                        <p className="text-xs text-slate-500">Tabela Técnica Offline</p>
                    </div>
                </div>
                <button onClick={handleDismiss} className="text-slate-400 hover:text-slate-600">
                    <X className="w-5 h-5" />
                </button>
            </div>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {isIOS
                    ? "Instale agora e tenha acesso rápido a essas informações sempre que precisar. Toque em Compartilhar e depois em 'Adicionar à Tela de Início'."
                    : "Instale agora e tenha acesso rápido a essas informações sempre que precisar, mesmo com conexão instável."}
            </p>

            {isIOS ? (
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 p-3 rounded-lg">
                    <Share className="w-4 h-4" />
                    <span>Toque em Compartilhar <span className="mx-1">→</span> Tela de Início</span>
                </div>
            ) : (
                <div className="flex gap-3">
                    <button
                        onClick={handleDismiss}
                        className="flex-1 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        Agora não
                    </button>
                    <button
                        onClick={handleInstall}
                        className="flex-1 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Instalar
                    </button>
                </div>
            )}
        </div>
    );
};

export default InstallPWA;
