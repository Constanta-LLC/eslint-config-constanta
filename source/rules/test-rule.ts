import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { stripIndent } from "common-tags";
import { ruleCreator } from "../utils";

const defaultOptions: Record<string, boolean | string>[] = [];

const rule = ruleCreator({
  defaultOptions,
  meta: {
    docs: {
      category: "Best Practices",
      description: "",
      recommended: false,
    },
    messages: {
      forbidden: "",
    },
    schema: [
      {
        type: "object",
        description: stripIndent``,
      },
    ],
    type: "problem",
  },
  name: "test-rule",
  create: (context) => {
    return {
      TSEnumDeclaration: (node: es.TSEnumDeclaration) => {
        /**
         * context.report({
            node,
            messageId: "forbidden",
          });
         */
      },
    };
  },
});

export = rule;
