import { AutoRc } from "auto";


/** Auto configuration */
export default function rc(): AutoRc {
    return {
        plugins: [
            "magic-zero", // https://intuit.github.io/auto/docs/generated/magic-zero
            "npm",
            "conventional-commits",
            "first-time-contributor",
            "released"
        ],
        // Follow the 2 branch deployment scheme
        // https://intuit.github.io/auto/docs/generated/shipit#next-branch-default
        baseBranch: "stable",        // latest "official" release
        prereleaseBranches: ["main"] // latest changes (subject to breaking). next, alpha, beta, and other multi-feature test branches can all be added here.
    };
}
