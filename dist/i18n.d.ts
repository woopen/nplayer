import { Language } from './config/lang';
import { RPlayerOptions } from './options';
export declare function fallback(): Language;
export declare function t(key: string, lang: string): string;
declare class I18n {
    lang: string;
    fallback: typeof fallback;
    constructor(opts: RPlayerOptions);
    t(key: string, lang?: string): string;
    addLang(lang: string, data: Record<string, string>): void;
}
export default I18n;