export function toLocalDateStringShort(data: string) {
  interface DateFormatOptions {
    weekday?: "long" | "short" | "narrow";
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
  }
  const options: DateFormatOptions = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };
  return new Date(data).toLocaleDateString("fa-ir", options);
}
