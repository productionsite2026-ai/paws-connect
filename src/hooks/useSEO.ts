import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useSEO = ({ title, description, keywords, canonicalUrl, ogImage, ogType = "website" }: SEOOptions) => {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", ogType);
    if (canonicalUrl) setMeta('meta[property="og:url"]', "content", canonicalUrl);
    if (ogImage) setMeta('meta[property="og:image"]', "content", ogImage);

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    if (ogImage) setMeta('meta[name="twitter:image"]', "content", ogImage);

    if (canonicalUrl) setLink("canonical", canonicalUrl);
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);
};

/**
 * Inject a JSON-LD schema and clean it up on unmount.
 */
export const useJsonLd = (schema: object | object[], id?: string) => {
  useEffect(() => {
    const schemas = Array.isArray(schema) ? schema : [schema];
    const elements = schemas.map((s, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      if (id) script.setAttribute("data-jsonld-id", `${id}-${i}`);
      script.innerHTML = JSON.stringify(s);
      document.head.appendChild(script);
      return script;
    });
    return () => {
      elements.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, [JSON.stringify(schema), id]);
};
