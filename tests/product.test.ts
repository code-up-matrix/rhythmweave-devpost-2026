import {beforeEach,describe,expect,it,vi} from "vitest";
import {createHmac} from "node:crypto";
import {rhythm,weave} from "../lib/rhythmweave";
beforeEach(()=>{vi.unstubAllGlobals();process.env.SESSION_SECRET="test-session-secret-with-at-least-32-characters";process.env.TWITCH_WEBHOOK_SECRET="test-webhook-secret-with-at-least-32-characters";});
describe("reproducible generative art",()=>{
 it("preserves pulse count for each allowed rhythm",()=>{for(let n=8;n<=48;n++)for(let k=1;k<=n;k++)expect(rhythm(n,k,3).filter(Boolean)).toHaveLength(k);});
 it("exports accessible deterministic SVG without active content",()=>{const input={steps:24,pulses:9,rings:8,rotation:0,palette:"moss" as const};const a=weave(input);expect(a.svg).toBe(weave(input).svg);expect(a.svg).toContain("<desc");expect(a.svg).not.toContain("<script");expect(a.svg.match(/<circle/g)).toHaveLength(24*8+1);});
});
