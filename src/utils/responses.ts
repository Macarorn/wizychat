// Returns one of several preset bot replies at random
export const getRandomBotResponse = (): string => {
  const responses = [
    "Sure! Let me help you with that.",
    "Can you please clarify your request?",
    "I'm looking into it for you...",
    "Thanks for your message. Let me check.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};
