export const SAMPLE_STORY =
  "As a logged-in customer, I want to cancel an order within 30 minutes of placing it so that I can correct mistakes before fulfillment.";

export const TEST_CASES = [
  { id: "TC-001", title: "Cancel eligible order", type: "Positive", priority: "High" },
  { id: "TC-002", title: "Cancel after 30 minutes", type: "Negative", priority: "High" },
  { id: "TC-003", title: "Cancel at exactly 30 minutes", type: "Edge", priority: "Medium" },
  { id: "TC-004", title: "Cancel already cancelled order", type: "Negative", priority: "Medium" },
] as const;

export function typeBadgeClass(type: string) {
  if (type === "Positive") return "bg-emerald-50 text-emerald-800";
  if (type === "Negative") return "bg-rose-50 text-rose-800";
  return "bg-indigo-50 text-indigo-800";
}
