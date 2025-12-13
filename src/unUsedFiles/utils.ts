// import { Base64 } from 'js-base64';
// import qs from 'query-string';
// import subtract from 'subtract-object';

// import { deepmerge, splitByExistingKeys, isObject } from '.';

// const getUrl = (url, query) => {
//   if (!query) return url;
//   return `${url}?${query}`;
// };

// export const stringifyQueryObject = qs.stringify;

// export const addQuery = (completeUrl, queryToAdd) => {
//   const { url, query } = qs.parseUrl(completeUrl);
//   const queryStr = qs.stringify(deepmerge(query, queryToAdd));
//   return getUrl(url, queryStr);
// };

// export const removeQuery = (completeUrl, queryToRemove) => {
//   const { url, query } = qs.parseUrl(completeUrl);
//   const queryStr = qs.stringify(subtract(queryToRemove, query));
//   return getUrl(url, queryStr);
// };

// export const concatQuery = (completeUrl, queryToAdd) => {
//   let { url, query } = qs.parseUrl(completeUrl);
//   query = Object.keys(query).reduce((acc, key) => {
//     acc[key] = isObject(query[key]) ? query[key] : [query[key]];
//     return acc;
//   }, {});
//   const queryStr = qs.stringify(deepmerge(query, queryToAdd));
//   return getUrl(url, queryStr);
// };

// export const getQuery = (completeUrl, queryToGet) => {
//   const { query } = qs.parseUrl(completeUrl);
//   return splitByExistingKeys(queryToGet, query).included;
// };

// export const parseQuery = (queryStr, queryToGet) => {
//   const query = qs.parse(queryStr);
//   return splitByExistingKeys(queryToGet, query).included;
// };

// export const withUrlPrefix = (apiUrls, prefixFunction) => {
//   for (const [key, func] of Object.entries(apiUrls)) {
//     apiUrls[key] = (() => options => {
//       let urlObj = func(options);
//       urlObj.url =
//         typeof prefixFunction === 'function' && !urlObj.noPrefix
//           ? prefixFunction({ version: urlObj.version }) + urlObj.url
//           : urlObj.url;
//       return urlObj;
//     })();
//   }
//   return apiUrls;
// };

// export const openWindow = url => {
//   if (url.indexOf('http') === -1) {
//     url = `//${url}`;
//   }
//   window.open(url);
// };

// export const reload = (url, { replace = false, top = false } = {}) => {
//   if (url.indexOf('http') === -1) {
//     url = url[0] === '/' ? url : `/${url}`;
//     url = window.location.origin + url;
//   }
//   if (replace) window.location.replace(url);
//   else if (top) window.top.location.href = url;
//   else window.location.href = url;
// };

// export const getHostForUrl = function (url) {
//   if (/^https?:\/\//.test(url)) {
//     // Absolute URL.
//     // The easy way to parse an URL, is to create <a> element.
//     // @see: https://gist.github.com/jlong/2428561
//     var parser = document.createElement('a');
//     parser.href = url;

//     return parser.hostname;
//   } else {
//     // Relative URL.
//     return window.location.hostname;
//   }
// };

// export const isUrlExternal = url => {
//   const host = window.location.hostname;
//   const linkHost = getHostForUrl(url);
//   return host !== linkHost;
// };

// export const decodeUrl = urlString => {
//   let decoded;
//   try {
//     decoded = JSON.parse(Base64.decode(urlString));
//   } catch (e) {
//     decoded = {};
//   }
//   return decoded;
// };

// export const encodeToUrl = (param, uriSafe = true) => Base64.encode(JSON.stringify(param), uriSafe);

// export const getSubDomain = (domain = '') => {
//   domain = domain.replace('https://www.', '');
//   domain = domain.replace('http://www.', '');
//   domain = domain.replace('https://', '');
//   domain = domain.replace('http://', '');
//   const REGEX_TO_EXTRACT_SUBDOMAIN = /[^.]+.(.*)/;
//   return domain.match(REGEX_TO_EXTRACT_SUBDOMAIN)[1];
// };

// export const addProtocol = link => {
//   //Add protocol to link if missing
//   if (!link) return null;
//   if (!/^(?:f|ht)tps?:\/\//.test(link) && !/\/\//.test(link)) {
//     link = '//' + link;
//   }
//   return link;
// };

// export const OS = {
//     MAC_OS: 'MacOS',
//     WINDOWS: 'Windows',
//     IOS: 'iOS',
//     ANDROID: 'Android',
//     LINUX: 'Linux',
//   };

//   export const MAC_OS_PLATFORMS = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
//   export const WINDOWS_PLATFORMS = ['Win32', 'Win64', 'Windows', 'WinCE'];
//   export const IOS_PLATFORMS = ['iPhone', 'iPad', 'iPod'];

//   export const getOS = () => {
//     let os = '';
//     const userAgent = window.navigator.userAgent;
//     const platform = window.navigator.platform;

//     if (MAC_OS_PLATFORMS.includes(platform)) {
//       os = OS.MAC_OS;
//     } else if (IOS_PLATFORMS.includes(platform)) {
//       os = OS.IOS;
//     } else if (WINDOWS_PLATFORMS.includes(platform)) {
//       os = OS.WINDOWS;
//     } else if (/Android/.test(userAgent)) {
//       os = OS.ANDROID;
//     } else if (!os && /Linux/.test(platform)) {
//       os = OS.LINUX;
//     }
//     return os;
//   };

//   import deepmerge from 'deepmerge';
// import emailValidator from 'email-validator';
// import { isPlainObject } from 'is-plain-object';
// import moment from 'moment';

// import { REGEX, SHELL_INITIALIZED_ROUTE } from './constants';

// const audioFormat = ['mp3'];

// const SUFFIX_SYMBOL = ['', 'k', 'm'];
// const SCALING_DIFF = 3;

// export const isDebuggingEnabled = () => {
//   let search = window.location.search;
//   return search.substring(1).split('&').includes('debug=true');
// };

// export const isUndefined = value => typeof value === 'undefined';

// export const isFunction = fn => typeof fn === 'function';

// export const isString = value => typeof value === 'string';

// export const isNull = value => value === null;

// export function isEmpty(x) {
//   if (isObject(x) && !Object.keys(x).length) return true;
//   if (Array.isArray(x) && !x.length) return true;
//   if (isString(x) && !x.length) return true;
//   if (isUndefined(x) || isNull(x)) return true;
//   return false;
// }

// export const IS_DEV = process.env.NODE_ENV !== 'production';

// export const isObject = obj => isPlainObject(obj);

// export const noop = () => undefined;

// export const identity = val => val;

// export const debounce = (func, wait, immediate) => {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// export const reload = debounce((url, { replace = false } = {}) => {
//   if (url.indexOf('http') === -1) {
//     url = url[0] === '/' ? url : `/${url}`;
//     url = window.location.origin + url;
//   }
//   if (replace) window.location.replace(url);
//   else window.location.href = url;
// }, 300);

// export const isWebView = () => window.navigator.userAgent.indexOf('MTWebView') > -1;
// export const isIOS = () =>
//   (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) ||
//   (!!navigator.platform && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

// export function isAndroid() {
//   return window.navigator.userAgent.indexOf('Android/') > -1;
// }

// export const isBoolean = variable => typeof variable === 'boolean';

// export const isMobile = () => window.innerWidth <= 576;

// export const getFileExtension = source => source.split('.').pop().split(/#|\?/)[0].toLowerCase();

// export const isAudio = extension => audioFormat.includes(extension);

// export const toggleFullscreenForElement = (element, callback = noop) => {
//   if (
//     !document.fullscreenElement &&
//     !document.mozFullScreenElement &&
//     !document.webkitFullscreenElement &&
//     !document.msFullscreenElement
//   ) {
//     if (element.requestFullscreen) {
//       element.requestFullscreen();
//     } else if (element.mozRequestFullScreen) {
//       element.mozRequestFullScreen(); // Firefox
//     } else if (element.webkitRequestFullscreen) {
//       element.webkitRequestFullscreen(); // Chrome and Safari
//     } else if (element.msRequestFullscreen) {
//       element.msRequestFullscreen(); // IE
//     }
//     callback(true);
//     //Toggle fullscreen on, exit fullscreen
//   } else {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } else if (document.msExitFullscreen) {
//       document.msExitFullscreen();
//     } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//     } else if (document.webkitExitFullscreen) {
//       document.webkitExitFullscreen();
//     }
//     callback(false);
//   }
// };

// export const splitByExistingKeys = (arr, obj) => {
//   let included = {};
//   let excluded = {};
//   Object.keys(obj).forEach(prop => {
//     if (arr.includes(prop)) {
//       included[prop] = obj[prop];
//     } else {
//       excluded[prop] = obj[prop];
//     }
//   });
//   return {
//     included,
//     excluded,
//   };
// };

// export function customStringify(a) {
//   try {
//     return JSON.stringify(a);
//   } catch (error) {
//     return false;
//   }
// }

// export function deepEqual(a, b) {
//   if (isObject(a) && isObject(b)) {
//     return Object.is(customStringify(a), customStringify(b));
//   } else if (Array.isArray(a) && Array.isArray(b)) {
//     a = a.map(v => customStringify(v)).join(',');
//     b = b.map(v => customStringify(v)).join(',');
//     return a === b;
//   }
//   return a === b;
// }

// export const ignorePropsForControls = ignoreProps => {
//   let disableControls = {};
//   if (!Array.isArray(ignoreProps)) {
//     return disableControls;
//   }
//   ignoreProps.forEach(prop => {
//     let obj = {};
//     obj[prop] = {
//       table: {
//         disable: true,
//       },
//     };
//     disableControls = { ...disableControls, ...obj };
//   });
//   return disableControls;
// };

// export const vh = v => {
//   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//   return (v * h) / 100;
// };

// export { deepmerge };

// export const isPrunable = elem => Array.isArray(elem) || isObject(elem);

// export const hasValue = elem => !(isUndefined(elem) || elem === null);

// export const prune = elem => {
//   if (!isPrunable(elem)) return elem;

//   if (Array.isArray(elem)) {
//     return elem.reduce((acc, val) => {
//       if (hasValue(val)) {
//         const newVal = isPrunable(val) ? prune(val) : val;
//         acc.push(newVal);
//       }
//       return acc;
//     }, []);
//   }

//   if (isObject(elem)) {
//     return Object.keys(elem).reduce((acc, key) => {
//       const val = elem[key];
//       if (hasValue(val)) {
//         const newVal = isPrunable(val) ? prune(val) : val;
//         acc[key] = newVal;
//       }
//       return acc;
//     }, {});
//   }
// };

// export const getPopupOnParent = trigger => trigger?.parentElement;

// export const stopPropagationHandler = _event => _event.stopPropagation();

// export const formatNumber = (number, precision = 1) => {
//   if (!number) return number;
//   const symbolIndex = Math.floor(Math.log10(Math.abs(number)) / SCALING_DIFF);

//   // if zero, we don't need a suffix
//   if (symbolIndex === 0) return number;

//   // scale the number
//   const scale = Math.pow(10, symbolIndex * SCALING_DIFF);
//   const scaled = number / scale;

//   // format number and add suffix
//   return scaled.toFixed(precision) + SUFFIX_SYMBOL[symbolIndex];
// };

// /**
//  * https://www.fileformat.info/info/unicode/char/200b/index.htm
//  * https://www.fileformat.info/info/unicode/char/feff/index.htm
//  * https://www.fileformat.info/info/unicode/char/200d/index.htm
//  * https://www.fileformat.info/info/unicode/char/200c/index.htm
//  * These are the standard ZSW uni-codes (UTF-16)
//  * sanitizeZSWInStrings: Sanitizes ZSW (if present)
//  * -> replace(/\s/g, '') -> Removes any NBSP (https://en.wikipedia.org/wiki/Non-breaking_space)
//  **/

// export const sanitizeZSWInStrings = str => {
//   const ZSW_UNI_CODES = [8203, 8204, 8205, 65279];
//   const NBSP_CODES = [160];
//   const SPECIAL_CHAR_CODES = [65533];
//   return str
//     .replace(/\s/g, '')
//     .split('')
//     .filter(
//       (letter, index) =>
//         !ZSW_UNI_CODES.includes(str.charCodeAt(index)) &&
//         !SPECIAL_CHAR_CODES.includes(str.charCodeAt(index)) &&
//         !NBSP_CODES.includes(str.charCodeAt(index))
//     )
//     .join('');
// };

// const getOffsetDifference = (timestamp, offset) => {
//   const time = moment(timestamp);
//   const currentOffset = time.utcOffset() * 60000;
//   return currentOffset - offset;
// };

// export const subtractOffsetDiff = (timestamp, offset, formatString) => {
//   if (offset !== 0 && !offset) return timestamp;
//   offset = getOffsetDifference(timestamp, offset);
//   return moment(new Date(timestamp - offset)).format(formatString);
// };

// export const hoursToMiliseconds = hours => (hours ? hours * 60 * 60 * 1000 : hours);

// export const isAdminSite = () => {
//   const regex = /^(dashboard|admin([0-9]+)?)\.[0-9a-z].*/gm;
//   return !isNull(regex.exec(window.location.host));
// };

// export function convertHexToDecimal(s) {
//   function add(x, y) {
//     let c = 0,
//       r = [];
//     x = x.split('').map(Number);
//     y = y.split('').map(Number);
//     while (x.length || y.length) {
//       let s = (x.pop() || 0) + (y.pop() || 0) + c;
//       r.unshift(s < 10 ? s : s - 10);
//       c = s < 10 ? 0 : 1;
//     }
//     if (c) r.unshift(c);
//     return r.join('');
//   }

//   let dec = '0';
//   s.split('').forEach(function (chr) {
//     let n = parseInt(chr, 16);
//     for (let t = 8; t; t >>= 1) {
//       dec = add(dec, dec);
//       if (n & t) dec = add(dec, '1');
//     }
//   });
//   return dec;
// }

// export function shallowEqual(objA, objB) {
//   //return true if objA is referentially same as objB
//   if (objA === objB) {
//     return true;
//   }

//   if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
//     return false;
//   }

//   var keysA = Object.keys(objA);
//   var keysB = Object.keys(objB);

//   if (keysA.length !== keysB.length) {
//     return false;
//   }

//   var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

//   // Test for A's keys different from B.
//   for (var idx = 0; idx < keysA.length; idx++) {
//     var key = keysA[idx];

//     if (!bHasOwnProperty(key)) {
//       return false;
//     }

//     var valueA = objA[key];
//     var valueB = objB[key];

//     if (valueA !== valueB) {
//       return false;
//     }
//   }

//   return true;
// }

// export const isValidEmail = email => emailValidator.validate(email);

// export const isInputTextVulnerable = value => {
//   const unsafePattern =
//     /<script|<\/script>|<iframe|<\/iframe>|<embed|<\/embed>|<object|<\/object>|<svg|<\/svg>|<math|<\/math>|<canvas|<\/canvas>|<link|<\/link>|<meta|<\/meta>|<style|<\/style>|<form|<\/form>|<applet|<\/applet>|<base|<\/base>|<audio|<\/audio>|<video|<\/video>|<h1|<\/h1>|<h2|<\/h2>|<h3|<\/h3>|<h4|<\/h4>|<h5|<\/h5>|<h6|<\/h6>|<p|<\/p>|<a|<\/a>|<\/\?/i;

//   return unsafePattern.test(value);
// };

// export const isValidUrl = value => {
//   if (!value) return false;
//   if (!value.match(REGEX.URL)) {
//     const decodedUrl = decodeURIComponent(value);
//     if (!decodedUrl.match(REGEX.URL)) return false;
//   }
//   return true;
// };

// export function pick(objectToPickFrom = {}, keysToPick = []) {
//   return keysToPick.reduce((accumulator, selectedKey) => {
//     const value = objectToPickFrom[selectedKey];

//     if (!isNull(value)) {
//       accumulator[selectedKey] = objectToPickFrom[selectedKey];
//     }

//     return accumulator;
//   }, {});
// }
// export const isShellUrl = url => url.startsWith(SHELL_INITIALIZED_ROUTE);

// export const getPopupContainerOnBody = () => document.body;
// export * from './datetime';

// import moment from 'moment';

// import { ABBREVIATED_MONTHS, GENERAL_DATE_FORMAT } from './constants';

// export const formattedDate = timestamp => moment(timestamp).format(GENERAL_DATE_FORMAT);

// export const timeFromNow = timestamp => moment(Date.now()).to(timestamp);

// export const formatToRFCDate = timestamp => {
//   const date = new Date(timestamp);
//   return date.toISOString();
// };

// export const timeDurationFormatter = timestamp => {
//   if (typeof timestamp !== 'number' || timestamp <= 0) {
//     return '';
//   } else if (timestamp < 60) {
//     return timestamp + 's';
//   } else if (timestamp < 3600) {
//     const seconds = timestamp % 60;
//     return Math.floor(timestamp / 60) + 'm' + (seconds > 0 ? ' ' + seconds + 's' : '');
//   } else {
//     const seconds = timestamp % 60;
//     const minutes = Math.floor((timestamp / 60) % 60);
//     return (
//       Math.floor(timestamp / 3600) +
//       'h' +
//       (minutes > 0 ? ' ' + minutes + 'm' : '') +
//       (seconds > 0 ? ' ' + seconds + 's' : '')
//     );
//   }
// };

// export const getYear = () => new Date().getFullYear();

// export const DEFAULT_LANG = 'en';

// /**
//  * This function is used to modify the abbreviated months provided by moment.
//  *
//  * @param moment: moment module
//  * @param lang: language for which we need to update the abbreviated months
//  * @param abbreviatedMonths: list of all the months
//  */
// export const updateMomentsAbbreviatedMonths = (
//   moment,
//   lang = DEFAULT_LANG,
//   abbreviatedMonths = ABBREVIATED_MONTHS
// ) => {
//   moment?.updateLocale &&
//     moment.updateLocale(lang, {
//       monthsShort: abbreviatedMonths,
//     });
// };

// updateMomentsAbbreviatedMonths(moment);

// export * from './constants';
// export { moment };

// export const setCookie = (cname, cvalue, exdays = 10000) => {
//     var d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     var expires = 'expires=' + d.toUTCString();
//     document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
//   };

//   export const getCookie = name => {
//     var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//     return v ? v[2] : undefined;
//   };

//   export const ABBREVIATED_MONTHS = [
//     'Jan',
//     'Feb',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'Aug',
//     'Sept',
//     'Oct',
//     'Nov',
//     'Dec',
//   ];

//   /**
//    * Correct: 08/21/2023 (preferred) NUMERICAL_DATE_FORMAT
//    * Correct: 08/21/23 (Only used if space is less) SHORT_NUMERICAL_DATE_FORMAT
//    * Incorrect: 21/08/2023
//    */
//   export const NUMERICAL_DATE_FORMAT = 'MM/DD/YYYY';
//   export const SHORT_NUMERICAL_DATE_FORMAT = 'MM/DD/YY';

//   /**
//    * Correct: March 8, 2022
//    * Incorrect: March 08, 2016
//    * Incorrect: 16 February, 2016
//    * https://mindtickle.atlassian.net/browse/PCI-257
//    *  */
//   export const GENERAL_DATE_FORMAT = 'MMM D, YYYY';

//   /**
//    * https://docs.google.com/document/d/1wdcl7HUX_L1cMLIzfCG2jh5SY1E3ZWwQqPYc1Z5x-a8/edit - page-6
//    */
//   export const TIME_DATE_FORMAT = 'h:mm a, MMM D, YYYY';

//   /**
//    * TIME_DATE_FORMAT is preferred over using DATE_TIME_FORMAT. Use it only when copy requires it
//    */
//   export const DATE_TIME_FORMAT = 'MMM D, YYYY, h:mm a';
//   /**
//    * Correct: 2:32 pm
//    * Incorrect: 14:32
//    * > _Do not write in a 24-hour time format (called military time in the U.S.) as that’s not commonly used in the U.S_
//    */
//   export const TIME_FORMAT = 'h:mm a';

//   /**
//    * REGEX is an object that holds various regular expressions used throughout the application.
//    * Currently, it contains only one property:
//    *
//    * URL: This is a regular expression for validating URLs. It checks if a string is a valid URL format.
//    * The regular expression pattern checks for the following:
//    * - Starts with 'http' or 'https' followed by '://'. This part is optional.
//    * - Followed by one or more alphanumeric characters, hyphens, or periods.
//    * - Followed by at least one period and more alphanumeric characters, hyphens, or periods.
//    * - Ends with various allowed URL special characters like '/', '?', '#', '[', ']', '@', '!', '$', '&', '%', '(', ')', '*', '+', ',', ';', '=', '.'.
//    */
//   export const REGEX = {
//     URL: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&%'()*+,;=.]+$/g,
//   };

//   export const SHELL_INITIALIZED_ROUTE = '/new/ui';
