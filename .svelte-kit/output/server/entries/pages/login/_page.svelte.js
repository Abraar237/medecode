import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/firebaseconfig.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.phone.svelte-1ijt8kd{position:relative;line-height:22px;display:flex;align-items:center;justify-content:center;width:18px;height:22px;flex-shrink:0}.use-phone-number.svelte-1ijt8kd{font-size:20px;background-color:#edd2b0;position:relative;font-size:var(--font-size-3xl);font-weight:500;font-family:var(--font-general-sans);color:var(--color-midnightblue);text-align:left;border:none;cursor:pointer;padding:var(--padding-lg) 50px}.phone-parent.svelte-1ijt8kd{position:absolute;top:calc(42% + 8.96px);left:calc(50% - 237.48px);background-color:var(--color-peachpuff);width:509px;overflow:hidden;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:var(--padding-lg) 50px;box-sizing:border-box;gap:var(--gap-smi);cursor:pointer;color:var(--labels-primary);font-family:var(--font-sf-pro)}.image-15-icon.svelte-1ijt8kd{position:relative;width:21.52px;height:22px;object-fit:cover}.continue-with-google.svelte-1ijt8kd{font-size:20px;position:relative;font-weight:500;cursor:pointer;background-color:#edd2b0;color:var(--color-midnightblue);padding:var(--padding-lg) 50px;border:none}.image-15-parent.svelte-1ijt8kd{position:absolute;top:calc(45% + 88.96px);left:calc(50% - 237.48px);background-color:var(--color-peachpuff);width:509px;overflow:hidden;display:flex;flex-direction:row;align-items:center;justify-content:center;padding:var(--padding-lg) 59px;box-sizing:border-box;gap:var(--gap-smi);text-align:left;font-size:var(--font-size-3xl)}.create-an-account.svelte-1ijt8kd{position:absolute;top:220px;left:calc(50% - 337.93px);font-size:36px;font-weight:500;display:inline-block;width:709.91px}.decode-.svelte-1ijt8kd{font-weight:600;color:#f4bb94}.medecode-.svelte-1ijt8kd{position:absolute;top:50px;left:105px;font-size:30px;text-align:left}.login-1.svelte-1ijt8kd{position:relative;background-color:#efe3db;width:100%;height:824px;overflow:hidden;text-align:center;font-size:17px;color:var(--color-midnightblue);font-family:var(--font-general-sans)}:root{--font-general-sans:"General Sans";--font-sf-pro:"SF Pro";--font-size-3xl:22px;--color-midnightblue:#071966;--color-peachpuff:#edd2b0;--labels-primary:#000;--gap-smi:13px;--padding-lg:18px}',
  map: null
};
let phoneIcon = "􀟝";
let googleIconSrc = "https://s3-alpha-sig.figma.com/img/d8c0/b552/484e401a80c740224d5cd08dd0bf7806?Expires=1701043200&Signature=HQHB5P0eiQ00UY19Wof5XWR5vJK-gLWYTkU8VUCPu~dHGWtGf7gWuiYXJb00ojqqMwYrMJi9jl8g-UZxQJHvvWLQJ9XT2OKve2uPV~tpDaHWYIvKMmpgxrywL76MjzluDBh55cHpzKU~MCy93AY07BSb~nwfi2DvJ4pl0VQLqIuTfwh55C1FQU4dwoCTww6u4YdG3XHOVKGbgakK73TNFF67KmCOfED89xNdLLoP6wanaUjf2YszG5HoOCNWBewVBHziyNrMOQ2ukQ-sAAtypuAq6W3AzpJE~B6lt5EOXOUdEo4sCrVv2dH3jxoHJokMp~qcafH8wzqxOZ~sxh925w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="login-1 svelte-1ijt8kd"><div class="phone-parent svelte-1ijt8kd" id="frameContainer"><div class="phone svelte-1ijt8kd">${escape(phoneIcon)}</div> <button class="use-phone-number svelte-1ijt8kd" data-svelte-h="svelte-liha0l">Use phone number</button></div> <div class="image-15-parent svelte-1ijt8kd"><img class="image-15-icon svelte-1ijt8kd" alt=""${add_attribute("src", googleIconSrc, 0)}> <button class="continue-with-google svelte-1ijt8kd" data-svelte-h="svelte-hu5ekw">Continue with Google</button></div> <div class="create-an-account svelte-1ijt8kd" data-svelte-h="svelte-1yebhce">Create an account or sign in to manage your health records and save your history</div> <div class="medecode- svelte-1ijt8kd" data-svelte-h="svelte-1n77mph"><span>Me</span><span class="decode- svelte-1ijt8kd">decode_</span></div></div>`;
});
export {
  Page as default
};
