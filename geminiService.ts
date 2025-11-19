export const GeminiService = {
  sendMessage: async (text: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const responses = [
          "That's a fascinating perspective on the digital frontier.",
          "I can certainly help you analyze that data pattern.",
          "Wildcord systems are operating at 98% efficiency.",
          "Could you elaborate on that specific parameter?",
          "Here is the generated code snippet you requested."
        ];
        resolve(responses[Math.floor(Math.random() * responses.length)]);
      }, 1000);
    });
  }
};
