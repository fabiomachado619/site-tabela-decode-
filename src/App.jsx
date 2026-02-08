import React, { useState, useMemo, useEffect } from 'react';
import { Search, Database, Cpu, HardDrive, Car, Info, PenTool, Monitor, ShoppingCart, ExternalLink, Facebook, Instagram, Youtube } from 'lucide-react';
import InstallPWA from './components/InstallPWA';

// ==================================================================================
// ARQUIVO CENTRAL: links_compra.js
// Edite esta constante para atualizar os links de todos os módulos rapidamente.
// ==================================================================================
const LINKS_COMPRA = {
  // VOLKSWAGEN
  "1AVI": "https://mercadolivre.com/sec/1T398i9",
  "1AVP": "https://mercadolivre.com/sec/2WynHah",
  "MP9": "https://mercadolivre.com/sec/2caTaTT",
  "3.8.2": "COLE_AQUI_O_LINK_DO_MODULO_3.8.2",
  "3.8.3": "COLE_AQUI_O_LINK_DO_MODULO_3.8.3",
  "5.9.2": "COLE_AQUI_O_LINK_DO_MODULO_5.9.2",
  "7.5.10": "COLE_AQUI_O_LINK_DO_MODULO_7.5.10",
  "7.5.20": "COLE_AQUI_O_LINK_DO_MODULO_7.5.20",
  "7.5.30": "COLE_AQUI_O_LINK_DO_MODULO_7.5.30",
  "4AVP": "COLE_AQUI_O_LINK_DO_MODULO_4AVP",
  "7.1.1": "COLE_AQUI_O_LINK_DO_MODULO_7.1.1",
  "5WP4": "COLE_AQUI_O_LINK_DO_MODULO_5WP4",
  "1AVB": "COLE_AQUI_O_LINK_DO_MODULO_1AVB",
  "4SV": "COLE_AQUI_O_LINK_DO_MODULO_4SV",
  "4LV": "COLE_AQUI_O_LINK_DO_MODULO_4LV",
  "4BV": "COLE_AQUI_O_LINK_DO_MODULO_4BV",
  "4MV": "COLE_AQUI_O_LINK_DO_MODULO_4MV",
  "9GV": "COLE_AQUI_O_LINK_DO_MODULO_9GV",
  "SIMOS 15.27": "COLE_AQUI_O_LINK_DO_MODULO_SIMOS_15.27",
  "17.5.20": "COLE_AQUI_O_LINK_DO_MODULO_17.5.20",
  "17.5.24": "COLE_AQUI_O_LINK_DO_MODULO_17.5.24",
  "17.5.24 (3 CIL)": "COLE_AQUI_O_LINK_DO_MODULO_17.5.24_3CIL",

  // FIAT
  "4AFB": "COLE_AQUI_O_LINK_DO_MODULO_4AFB",
  "59FB": "COLE_AQUI_O_LINK_DO_MODULO_59FB",
  "49FB": "COLE_AQUI_O_LINK_DO_MODULO_49FB",
  "ME7.9.6": "COLE_AQUI_O_LINK_DO_MODULO_ME7.9.6",
  "ME7.9.9": "COLE_AQUI_O_LINK_DO_MODULO_ME7.9.9",
  "ME7.3 H4 HIBRIDA": "COLE_AQUI_O_LINK_DO_MODULO_ME7.3_H4",
  "1AWG6": "COLE_AQUI_O_LINK_DO_MODULO_1AWG6",
  "1AW1G7 HITACHI": "COLE_AQUI_O_LINK_DO_MODULO_1AW1G7",
  "BOSCH MAREA 20V": "COLE_AQUI_O_LINK_DO_MODULO_MAREA_20V",
  "MAREA HIBRIDA 2.4": "COLE_AQUI_O_LINK_DO_MODULO_MAREA_HIB",
  "STYLO HIBR 2.4": "COLE_AQUI_O_LINK_DO_MODULO_STYLO_HIB",
  "1ABG": "COLE_AQUI_O_LINK_DO_MODULO_1ABG",
  "7GF": "COLE_AQUI_O_LINK_DO_MODULO_7GF",
  "10GF": "COLE_AQUI_O_LINK_DO_MODULO_10GF",
  "4CF": "COLE_AQUI_O_LINK_DO_MODULO_4CF",
  "HSFI": "COLE_AQUI_O_LINK_DO_MODULO_HSFI",
  "4SF": "COLE_AQUI_O_LINK_DO_MODULO_4SF",
  "4DF": "COLE_AQUI_O_LINK_DO_MODULO_4DF",
  "4GF": "COLE_AQUI_O_LINK_DO_MODULO_4GF",

  // FORD
  "ANIL": "COLE_AQUI_O_LINK_DO_MODULO_ANIL",
  "SECO": "COLE_AQUI_O_LINK_DO_MODULO_SECO",
  "JOTA": "COLE_AQUI_O_LINK_DO_MODULO_JOTA",
  "TRIM": "COLE_AQUI_O_LINK_DO_MODULO_TRIM",
  "DALE": "COLE_AQUI_O_LINK_DO_MODULO_DALE",
  "TOGA": "COLE_AQUI_O_LINK_DO_MODULO_TOGA",
  "DRAW": "COLE_AQUI_O_LINK_DO_MODULO_DRAW",
  "DISC": "COLE_AQUI_O_LINK_DO_MODULO_DISC",
  "OWLS": "COLE_AQUI_O_LINK_DO_MODULO_OWLS",
  "BOSCH FOMOCO": "COLE_AQUI_O_LINK_DO_MODULO_BOSCH_FOMOCO",
  "4AFR": "COLE_AQUI_O_LINK_DO_MODULO_4AFR",
  "4CFR": "COLE_AQUI_O_LINK_DO_MODULO_4CFR",
  "ADB4": "COLE_AQUI_O_LINK_DO_MODULO_ADB4",
  "EECVI": "COLE_AQUI_O_LINK_DO_MODULO_EECVI",
  "YP02": "COLE_AQUI_O_LINK_DO_MODULO_YP02",

  // GM
  "EFI": "COLE_AQUI_O_LINK_DO_MODULO_EFI",
  "MPFI": "COLE_AQUI_O_LINK_DO_MODULO_MPFI",
  "VHC": "COLE_AQUI_O_LINK_DO_MODULO_VHC",
  "OHC": "COLE_AQUI_O_LINK_DO_MODULO_OHC",
  "M154": "COLE_AQUI_O_LINK_DO_MODULO_M154",
  "OMEGA AUST MULTEC": "COLE_AQUI_O_LINK_DO_MODULO_OMEGA_MULTEC",
  "CORSA 1.0 16V": "COLE_AQUI_O_LINK_DO_MODULO_CORSA_16V",
  "E80": "COLE_AQUI_O_LINK_DO_MODULO_E80",
  "E84": "COLE_AQUI_O_LINK_DO_MODULO_E84",
  "E64": "COLE_AQUI_O_LINK_DO_MODULO_E64",
  "E37": "COLE_AQUI_O_LINK_DO_MODULO_E37",
  "E98": "COLE_AQUI_O_LINK_DO_MODULO_E98",
  "E39": "COLE_AQUI_O_LINK_DO_MODULO_E39",
  "E83": "COLE_AQUI_O_LINK_DO_MODULO_E83",

  // PSA
  "MA 3.0": "COLE_AQUI_O_LINK_DO_MODULO_MA_3.0",
  "MA 3.1": "COLE_AQUI_O_LINK_DO_MODULO_MA_3.1",
  "MA 3.2": "COLE_AQUI_O_LINK_DO_MODULO_MA_3.2",
  "MA 5.1": "COLE_AQUI_O_LINK_DO_MODULO_MA_5.1",
  "MP 5.1.1": "COLE_AQUI_O_LINK_DO_MODULO_MP_5.1.1",
  "MP 5.2": "COLE_AQUI_O_LINK_DO_MODULO_MP_5.2",
  "MP 7.0": "COLE_AQUI_O_LINK_DO_MODULO_MP_7.0",
  "ME 7.2 E 7.3": "COLE_AQUI_O_LINK_DO_MODULO_ME_7.2_7.3",
  "SAGEM 2000": "COLE_AQUI_O_LINK_DO_MODULO_SAGEM_2000",
  "6LP.XX": "COLE_AQUI_O_LINK_DO_MODULO_6LP.XX",
  "6KPB": "COLE_AQUI_O_LINK_DO_MODULO_6KPB",
  "ME 7.4.4": "COLE_AQUI_O_LINK_DO_MODULO_ME_7.4.4",
  "ME 7.4.5": "COLE_AQUI_O_LINK_DO_MODULO_ME_7.4.5",
  "ME 7.4.9": "COLE_AQUI_O_LINK_DO_MODULO_ME_7.4.9",
  "34.4": "COLE_AQUI_O_LINK_DO_MODULO_34.4",
  "34.5": "COLE_AQUI_O_LINK_DO_MODULO_34.5",
  "48.P2": "COLE_AQUI_O_LINK_DO_MODULO_48.P2",
  "SL96": "COLE_AQUI_O_LINK_DO_MODULO_SL96",
  "5NP1": "COLE_AQUI_O_LINK_DO_MODULO_5NP1",
  "5NP2": "COLE_AQUI_O_LINK_DO_MODULO_5NP2",
  "1AW8P": "COLE_AQUI_O_LINK_DO_MODULO_1AW8P",
  "1AP": "COLE_AQUI_O_LINK_DO_MODULO_1AP",
  "46.6": "COLE_AQUI_O_LINK_DO_MODULO_46.6",

  // RENAULT
  "MA3.1": "COLE_AQUI_O_LINK_DO_MODULO_MA3.1",
  "5NR01": "COLE_AQUI_O_LINK_DO_MODULO_5NR01",
  "5NR2.C1": "COLE_AQUI_O_LINK_DO_MODULO_5NR2.C1",
  "5NR2C1": "COLE_AQUI_O_LINK_DO_MODULO_5NR2C1",
  "EMS3134": "COLE_AQUI_O_LINK_DO_MODULO_EMS3134",
  "EMS3120": "COLE_AQUI_O_LINK_DO_MODULO_EMS3120",
  "EMS3125": "COLE_AQUI_O_LINK_DO_MODULO_EMS3125",
  "SIRIUS 32": "COLE_AQUI_O_LINK_DO_MODULO_SIRIUS_32",
  "SIRIUS 34": "COLE_AQUI_O_LINK_DO_MODULO_SIRIUS_34",
  "FENIX 3": "COLE_AQUI_O_LINK_DO_MODULO_FENIX_3",
  "FENIX 5": "COLE_AQUI_O_LINK_DO_MODULO_FENIX_5",
  "SEM 3110 FLUENCE": "COLE_AQUI_O_LINK_DO_MODULO_SEM_3110",
  "SAFIR": "COLE_AQUI_O_LINK_DO_MODULO_SAFIR",
  "SIM 32": "COLE_AQUI_O_LINK_DO_MODULO_SIM_32",
  "V42": "COLE_AQUI_O_LINK_DO_MODULO_V42"
};
// ==================================================================================

// Ícone do WhatsApp customizado
const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);



const DatabaseApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('TODAS');

  // <!-- META PIXEL POWER ON -->
  useEffect(() => {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '1356826896446202');
    window.fbq('track', 'PageView');
  }, []);

  // <!-- SERVICE WORKER REGISTRATION -->
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('SW registrado com sucesso:', registration.scope);
          })
          .catch(err => {
            console.log('Falha ao registrar SW:', err);
          });
      });
    }
  }, []);

  // Função centralizada para tracking
  const trackPixel = (eventName, data = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, data);
    }
  };

  // Adicionei o campo "link_compra" a cada objeto conforme solicitado.
  const fullData = [
    // VOLKSWAGEN
    { brand: 'Volkswagen', system: '1AVI', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO', memory: 'PLCC 27C010', link_compra: '' },
    { brand: 'Volkswagen', system: '1AVP', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO', memory: 'USAR 29F010', link_compra: '' },
    { brand: 'Volkswagen', system: 'MP9', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'Volkswagen', system: '3.8.2', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'Volkswagen', system: '3.8.3', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'Volkswagen', system: '5.9.2', original: 'SIM', off: 'SIM', equip: 'GRAVADOR DE EPROM', prog: 'ARQUIVO', memory: 'FLASH 29F200', link_compra: '' },
    { brand: 'Volkswagen', system: '7.5.10', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU CALCULADORA', memory: 'EPROM 95040', link_compra: '' },
    { brand: 'Volkswagen', system: '7.5.20', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU CALCULADORA', memory: 'EPROM 95040', link_compra: '' },
    { brand: 'Volkswagen', system: '7.5.30', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU CALCULADORA', memory: 'EPROM 95040', link_compra: '' },
    { brand: 'Volkswagen', system: '4AVP', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA + ST10 OU KTAG', prog: 'ARQUIVO MAIS PROCEDIMENTO', memory: 'EPROM 95160 E PROCESSADOR', link_compra: '' },
    { brand: 'Volkswagen', system: '7.1.1', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 95040', link_compra: '' },
    { brand: 'Volkswagen', system: '5WP4', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 93C56', link_compra: '' },
    { brand: 'Volkswagen', system: '1AVB', original: 'NÃO', off: 'NÃO', equip: 'GRAVADOR EPROM', prog: '-', memory: 'PLCC 27C512', link_compra: '' },
    { brand: 'Volkswagen', system: '4SV', original: 'SIM', off: 'NÃO', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 95080', link_compra: '' },
    { brand: 'Volkswagen', system: '4LV', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 95080', link_compra: '' },
    { brand: 'Volkswagen', system: '4BV', original: 'SIM', off: 'NÃO', equip: 'ST10 F OU KTAG', prog: '-', memory: 'PROCESSADOR ST10F', link_compra: '' },
    { brand: 'Volkswagen', system: '4MV', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO', memory: 'EPROM 95080', link_compra: '' },
    { brand: 'Volkswagen', system: '9GV', original: 'SIM', off: 'NÃO', equip: 'TRASDATA-IOTERMINAL-KTM-MAGIC FL', prog: '-', memory: 'EPROM 95320 + PROCESSADOR', link_compra: '' },
    { brand: 'Volkswagen', system: 'SIMOS 15.27', original: 'SIM', off: 'NÃO', equip: 'TRASDATA--KTM-MAGIC FLEX', prog: '-', memory: 'EPROM + PROCESSADOR', link_compra: '' },
    { brand: 'Volkswagen', system: '17.5.20', original: 'SIM', off: 'SIM', equip: 'KTAG-TRASD-KTM-MAGIC-DC706 ETC', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Volkswagen', system: '17.5.24', original: 'SIM', off: 'SIM', equip: 'KTAG-TRASD-KTM-MAGIC-DC706 ETC', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Volkswagen', system: '17.5.24 (3 CIL)', original: 'SIM', off: 'SIM', equip: 'KTAG-TRASD-KTM-MAGIC-DC706 ETC', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },

    // FIAT
    { brand: 'Fiat', system: '4AFB', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT DE UPA', memory: 'EPROM 95160', link_compra: '' },
    { brand: 'Fiat', system: '59FB', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT DE UPA', memory: 'EPROM 95080 OU 25080', link_compra: '' },
    { brand: 'Fiat', system: '49FB', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT DE UPA', memory: 'EPROM 95040', link_compra: '' },
    { brand: 'Fiat', system: 'ME7.9.6', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT DE UPA', memory: 'FLASH 29F400', link_compra: '' },
    { brand: 'Fiat', system: 'ME7.9.9', original: 'SIM', off: 'NÃO', equip: 'GRAVADOR EPROM', prog: '-', memory: 'EPROM 95080 MAIS PROCESSADOR', link_compra: '' },
    { brand: 'Fiat', system: 'ME7.3 H4 HIBRIDA', original: 'SIM', off: 'SIM', equip: 'KESS-KWP', prog: 'ARQUIVO', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Fiat', system: '1AWG6', original: 'NÃO', off: 'NÃO', equip: 'UPA CHINA', prog: '-', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Fiat', system: '1AW1G7 HITACHI', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO', memory: 'DIP 27C512 / EPROM 93C46', link_compra: '' },
    { brand: 'Fiat', system: 'BOSCH MAREA 20V', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT DE UPA', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'Fiat', system: 'MAREA HIBRIDA 2.4', original: 'SIM', off: 'SIM', equip: 'KESS-KWP', prog: 'ARQUIVO', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Fiat', system: 'STYLO HIBR 2.4', original: 'SIM', off: 'SIM', equip: 'KESS-KWP', prog: 'ARQUIVO', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Fiat', system: '1ABG', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT DE UPA', memory: 'DIP 27C512', link_compra: '' },
    { brand: 'Fiat', system: '7GF', original: 'SIM', off: 'SIM', equip: 'UPA OU GRAVADOR+IO TERM+KTAG', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Fiat', system: '10GF', original: 'SIM', off: 'SIM', equip: 'UPA OU GRAVADOR+IO TERMINAL', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Fiat', system: '4CF', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'SCRIPT DE UPA', memory: 'EPROM 95320', link_compra: '' },
    { brand: 'Fiat', system: 'HSFI', original: 'SIM', off: 'NÃO', equip: 'GRAVADOR EPROM MAIS KWP-KESS', prog: '-', memory: 'ST10F', link_compra: '' },
    { brand: 'Fiat', system: '4SF', original: 'SIM', off: 'NÃO', equip: 'ST10-OU KTAG', prog: '-', memory: 'ST10F', link_compra: '' },
    { brand: 'Fiat', system: '4DF', original: 'SIM', off: 'NÃO', equip: 'ST10-OU KTAG', prog: '-', memory: 'ST10F', link_compra: '' },
    { brand: 'Fiat', system: '4GF', original: 'SIM', off: 'NÃO', equip: 'ST10-OU KTAG', prog: '-', memory: 'ST10F', link_compra: '' },

    // FORD
    { brand: 'Ford', system: 'ANIL', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'SECO', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'JOTA', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'TRIM', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'DALE', original: 'SIM', off: 'NÃO', equip: '-', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'TOGA', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'DRAW', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'DISC', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'OWLS', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'BOSCH FOMOCO', original: 'SIM', off: 'SIM', equip: 'CALCULADORA', prog: 'CALCULADORA', memory: 'EPROM + PROCESSADOR', link_compra: '' },
    { brand: 'Ford', system: '4AFR', original: 'SIM', off: 'NÃO', equip: '-', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: '4CFR', original: 'SIM', off: 'NÃO', equip: '-', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'ADB4', original: 'SIM', off: 'NÃO', equip: '-', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'EECVI', original: 'SIM', off: 'NÃO', equip: '-', prog: '-', memory: '-', link_compra: '' },
    { brand: 'Ford', system: 'YP02', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: '-', memory: '-', link_compra: '' },

    // GM
    { brand: 'GM', system: 'EFI', original: 'NÃO', off: 'NÃO', equip: '-', prog: '-', memory: '-', link_compra: '' },
    { brand: 'GM', system: 'MPFI', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'CHIP FERRAMENTA', memory: 'DIP 27C512', link_compra: '' },
    { brand: 'GM', system: 'ME7.9.9', original: 'SIM', off: 'NÃO', equip: 'GRAVADOR EPROM ST10-KTAG', prog: '-', memory: 'EPROM 95040', link_compra: '' },
    { brand: 'GM', system: 'HSFI', original: 'SIM', off: 'NÃO', equip: 'GRAVADOR EPROM E KWP-KESS', prog: '-', memory: 'EPROM 95040', link_compra: '' },
    { brand: 'GM', system: 'VHC', original: 'SIM', off: 'NÃO', equip: 'GRAVADOR EPROM E KWP-KESS', prog: '-', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'OHC', original: 'SIM', off: 'NÃO', equip: 'KWP-KESS', prog: '-', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'M154', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'GM', system: 'OMEGA AUST MULTEC', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO', memory: 'DIP 27C010', link_compra: '' },
    { brand: 'GM', system: 'CORSA 1.0 16V', original: 'SIM', off: 'SIM', equip: 'UPA CHINA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'E80', original: 'SIM', off: 'SIM', equip: 'IO TERMINAL', prog: 'HP TUNNERS OU CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'E84', original: 'SIM', off: 'SIM', equip: 'IO TERMINAL', prog: 'HP TUNNERS OU CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'E64', original: 'SIM', off: 'NÃO', equip: '-', prog: '-', memory: '-', link_compra: '' },
    { brand: 'GM', system: 'E37', original: 'SIM', off: 'SIM', equip: 'IO TERMINAL', prog: 'HP TUNNERS OU CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'E98', original: 'SIM', off: 'SIM', equip: 'IO TERMINAL', prog: 'HP TUNNERS OU CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'E39', original: 'SIM', off: 'SIM', equip: 'IO TERMINAL', prog: 'HP TUNNERS OU CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'GM', system: 'E83', original: 'SIM', off: 'SIM', equip: 'IO TERMINAL', prog: 'HP TUNNERS OU CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },

    // PSA
    { brand: 'PSA', system: 'MA 3.0', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'PSA', system: 'MA 3.1', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'PSA', system: 'MA 3.2', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 93SC46', link_compra: '' },
    { brand: 'PSA', system: 'MA 5.1', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 93C46', link_compra: '' },
    { brand: 'PSA', system: 'MP 5.1.1', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 93C46', link_compra: '' },
    { brand: 'PSA', system: 'MP 5.2', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM B58221 OU 93C46', link_compra: '' },
    { brand: 'PSA', system: 'MP 7.0', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'PSA', system: 'ME 7.2 E 7.3', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 24C02', link_compra: '' },
    { brand: 'PSA', system: 'SAGEM 2000', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 95080 OU 95160', link_compra: '' },
    { brand: 'PSA', system: '6LP.XX', original: 'SIM', off: 'SIM', equip: 'ST10F OU KTAG', prog: 'CALCULADORA', memory: 'ST10F', link_compra: '' },
    { brand: 'PSA', system: '6KPB', original: 'SIM', off: 'SIM', equip: 'ST10F OU KTAG', prog: 'CALCULADORA', memory: 'ST10F', link_compra: '' },
    { brand: 'PSA', system: 'ME 7.4.4', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU KTAG', prog: 'CALCULADORA', memory: 'EPROM 95160', link_compra: '' },
    { brand: 'PSA', system: 'ME 7.4.5', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU KTAG UPA', prog: 'CALCULADORA', memory: 'EPROM 95320', link_compra: '' },
    { brand: 'PSA', system: 'ME 7.4.9', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU KTAG-UPA', prog: 'CALCULADORA', memory: 'EPROM 95320', link_compra: '' },
    { brand: 'PSA', system: '34.4', original: 'SIM', off: 'SIM', equip: 'KTAG', prog: 'CALCULADORA', memory: 'EPROM 95320', link_compra: '' },
    { brand: 'PSA', system: '34.5', original: 'SIM', off: 'SIM', equip: 'KTAG', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 95320', link_compra: '' },
    { brand: 'PSA', system: '48.P2', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'FLASH 29F400', link_compra: '' },
    { brand: 'PSA', system: 'SL96', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'PROCEDIMENTO MANUAL', memory: 'EPROM PLCC', link_compra: '' },
    { brand: 'PSA', system: '5NP1', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENDO', prog: 'PROCEDIMENTO MANUAL', memory: 'EPROM 95160 HIBRIDA', link_compra: '' },
    { brand: 'PSA', system: '5NP2', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 95160', link_compra: '' },
    { brand: 'PSA', system: '1AW8P', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: 'PROCEDIMENTO MANUAL', memory: '-', link_compra: '' },
    { brand: 'PSA', system: '1AP', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: 'PROCEDIMENTO CHIP FERRAMENTA', memory: 'USAR CHIP FERRAMENTA 28F512', link_compra: '' },
    { brand: 'PSA', system: '46.6', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'CALCULADORA', memory: 'EPROM 95128', link_compra: '' },

    // RENAULT
    { brand: 'Renault', system: 'MA3.1', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 93C46', link_compra: '' },
    { brand: 'Renault', system: '5NR01', original: 'SIM', off: 'SIM', equip: 'PROCEDIMENTO', prog: 'PROCEDIMENTO', memory: 'EPROM 95160', link_compra: '' },
    { brand: 'Renault', system: '5NR2.C1', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 95160', link_compra: '' },
    { brand: 'Renault', system: '5NR2C1', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 95160 MAIS PROCEDIMENTO', link_compra: '' },
    { brand: 'Renault', system: 'EMS3134', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'FLASH 29F400', link_compra: '' },
    { brand: 'Renault', system: 'EMS3120', original: 'SIM', off: 'SIM', equip: 'TRASDATA OU COMBLOADER', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Renault', system: 'EMS3125', original: 'SIM', off: 'SIM', equip: 'TRASDATA OU COMBLOADER', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Renault', system: 'SIRIUS 32', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU IMMOKLER', memory: 'FLASH 29F200', link_compra: '' },
    { brand: 'Renault', system: 'SIRIUS 34', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'ARQUIVO OU IMMOKLER', memory: 'FLASH 29F400', link_compra: '' },
    { brand: 'Renault', system: 'FENIX 3', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'PROCEDIMENTO', memory: 'PLCC 28F512', link_compra: '' },
    { brand: 'Renault', system: 'FENIX 5', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'PROCEDIMENTO', memory: 'PLCC 28F512 PROCEDIMENTO', link_compra: '' },
    { brand: 'Renault', system: 'SEM 3110 FLUENCE', original: 'SIM', off: 'SIM', equip: 'KTAG OU TRASDATA', prog: 'CALCULADORA', memory: 'PROCESSADOR', link_compra: '' },
    { brand: 'Renault', system: 'SAFIR', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM', prog: 'PROCEDIMENTO', memory: 'PLCC 28F512', link_compra: '' },
    { brand: 'Renault', system: 'SIM 32', original: 'SIM', off: 'SIM', equip: 'GRAVADOR EPROM OU UPA', prog: 'ARQUIVO OU SCRIPT UPA', memory: 'EPROM 95160', link_compra: '' },
    { brand: 'Renault', system: 'V42', original: 'SIM', off: 'SIM', equip: 'TRASDATA-KTAG-IO TERMINAL', prog: 'CALCULADORA', memory: 'PROCESSADOR E EPROM', link_compra: '' },
  ];

  const brands = ['TODAS', 'Volkswagen', 'Fiat', 'Ford', 'GM', 'PSA', 'Renault'];

  const filteredData = useMemo(() => {
    return fullData.filter(item => {
      const matchesBrand = selectedBrand === 'TODAS' || item.brand === selectedBrand;
      const matchesSearch =
        item.system.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.memory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.equip.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [selectedBrand, searchTerm]);

  // Função para abrir o link de compra com validação
  const handlePurchaseClick = (item) => {
    // TRACK PIXEL EVENT: ViewContent
    trackPixel('ViewContent', {
      content_name: item.system,
      content_category: item.brand
    });

    // 1. Tenta pegar do arquivo central (LINKS_COMPRA)
    // 2. Se não existir, tenta pegar do campo direto no JSON
    const link = LINKS_COMPRA[item.system] || item.link_compra;

    if (!link || link.includes("COLE_AQUI")) {
      alert(`Link de compra para o módulo ${item.system} ainda não foi cadastrado.\n\nEdite o arquivo para adicionar: "COLE_AQUI_O_LINK_DO_MODULO_${item.system}"`);
      return;
    }

    window.open(link, '_blank');
  };

  const whatsAppMessage = "Olá! Eu estava na página de decodes da Power ON e gostaria de mais informações sobre o serviço para o meu módulo. Meu sistema é: [COLE_AQUI].";
  const whatsAppUrl = `https://wa.me/5565992976877?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Power ON</h1>
                <p className="text-slate-400 text-sm">A Tecnologia em Suas Mãos - Tabela de Decodificação 2024</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Buscar Sistema, Memória ou Equip..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">

        {/* Brand Filter Tabs */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 flex items-center gap-2
                  ${selectedBrand === brand
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                {brand !== 'TODAS' && <Car className="w-4 h-4" />}
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-blue-600" />
            Resultados: {selectedBrand}
          </h2>
          <span className="text-sm font-medium text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
            {filteredData.length} registros encontrados
          </span>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4 font-semibold w-24">Marca</th>
                  <th className="p-4 font-semibold w-32">Sistema</th>
                  <th className="p-4 font-semibold text-center w-24">Orig. Imob</th>
                  <th className="p-4 font-semibold text-center w-24">Imo Off</th>
                  <th className="p-4 font-semibold">Equipamento Leitura</th>
                  <th className="p-4 font-semibold">Programa Imo Off</th>
                  <th className="p-4 font-semibold">Tipo Memória</th>
                  <th className="p-4 font-semibold text-center w-32">Adquirir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredData.map((row, index) => (
                  <tr
                    key={`${row.system}-${index}`}
                    className="hover:bg-blue-50 transition-colors duration-150 group"
                  >
                    <td className="p-4 font-bold text-slate-700">{row.brand}</td>
                    <td className="p-4 font-bold text-blue-700 bg-blue-50/50 rounded-r-lg">{row.system}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                        ${row.original.includes('SIM')
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : 'bg-red-100 text-red-800 border-red-200'}`}>
                        {row.original}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                        ${row.off.includes('SIM')
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : 'bg-red-100 text-red-800 border-red-200'}`}>
                        {row.off}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <PenTool className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100" />
                        {row.equip}
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100" />
                        {row.prog}
                      </div>
                    </td>
                    <td className="p-4 text-slate-600 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-3 h-3 text-slate-400" />
                        {row.memory}
                      </div>
                    </td>
                    {/* Nova Coluna: Adquirir */}
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handlePurchaseClick(row)}
                        className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm active:transform active:scale-95"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Adquirir
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="p-12 text-center text-slate-400">
              <Info className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">Nenhum resultado encontrado</p>
              <p className="text-sm">Tente buscar por outro termo ou mude o filtro de montadora.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="container mx-auto px-4 py-8 text-center">

          {/* Seção de Redes Sociais e Contato */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-6">Nos siga nas redes sociais</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Ícones Sociais */}
              <div className="flex justify-center items-center gap-8">
                <a
                  href="https://www.facebook.com/lojadomecatronicopoweron"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-blue-600 hover:text-blue-700 transition-all duration-200 transform hover:scale-110 drop-shadow-sm"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/loja_mecatronica_power_on/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-pink-600 hover:text-pink-700 transition-all duration-200 transform hover:scale-110 drop-shadow-sm"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  href="https://www.youtube.com/@fabiomachado_powerOn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-red-600 hover:text-red-700 transition-all duration-200 transform hover:scale-110 drop-shadow-sm"
                >
                  <Youtube className="w-8 h-8" />
                </a>
              </div>

              {/* Divisória visual apenas em Desktop */}
              <div className="hidden md:block w-px h-8 bg-slate-300"></div>

              {/* Botão de WhatsApp */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixel('Contact', { method: 'whatsapp' })}
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="text-slate-500 text-sm">
            <p>© 2024 Power ON - Todos os direitos reservados.</p>
            <p className="mt-1 text-xs">Baseado na documentação técnica oficial "Tabela Completa 2024".</p>
          </div>
        </div>
      </footer>

      {/* PWA INSTALL COMPONENT */}
      <InstallPWA />
    </div>
  );
};

export default DatabaseApp;
