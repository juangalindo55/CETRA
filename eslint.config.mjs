import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [".claude/**", ".next/**", "node_modules/**", "conductor/**"],
  },
];

export default eslintConfig;
