import { GmailLabel } from "@/utils/gmail/label";

/** Gmail's Important marker. Outlook never sets it, so its threads read as not important. */
export function isThreadImportant(
  messages: readonly { labelIds?: string[] | null }[],
) {
  return messages.some((message) =>
    message.labelIds?.includes(GmailLabel.IMPORTANT),
  );
}
