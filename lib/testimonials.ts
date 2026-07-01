export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  category: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    category: 'AI Business Consulting',
    quote:
      "We were running a traditional practice with siloed processes. Grateful Marketing conducted a comprehensive audit of our operations and showed us where AI could streamline case research, document management, and client communication without compromising our ethical obligations. Their strategic recommendations have saved us 8+ hours per week and reduced errors. But what impressed me most was how they positioned AI as a tool to elevate our practice, not replace our expertise.",
    name: 'Managing Partner',
    title: 'Legal Services',
  },
  {
    id: 't2',
    category: 'AI Marketing Strategy & Deployment',
    quote:
      "We needed a comprehensive solution to capture leads 24/7 while maintaining the warm, compassionate tone families expect. Grateful Marketing deployed a custom voice agent and developed an integrated content strategy — all infused with AI assistance. We're capturing leads around the clock, nurturing them through AI-powered content, and our conversion rate has doubled in 6 months.",
    name: 'Operations Director',
    title: 'Senior Living Services',
  },
  {
    id: 't3',
    category: 'AI Team Training & Empowerment',
    quote:
      "Grateful Marketing didn't just drop technology on our team; they conducted comprehensive training that covered AI fundamentals, how to use the tools, and how to troubleshoot issues. Our staff, who were initially skeptical, left feeling confident and empowered. Six months later, they're suggesting improvements to the system. That's true team empowerment.",
    name: 'Practice Manager',
    title: 'Dental Group',
  },
  {
    id: 't4',
    category: 'AI Voice Agents',
    quote:
      "In real estate, the difference between winning a client and losing one is often measured in minutes. Our old after-hours voicemail was a graveyard for warm leads. Grateful Marketing built us a voice agent that responds to every inquiry the moment it comes in, day or night. We've recaptured leads we never would have touched before, and our conversion rate on after-hours inquiries has climbed 55% in four months.",
    name: 'Broker of Record',
    title: 'Residential Real Estate Brokerage',
  },
  {
    id: 't5',
    category: 'AI Marketing Strategy & Deployment',
    quote:
      "Compliance was our biggest concern with AI adoption. Grateful Marketing didn't just recommend tools — they helped us build a strategic framework that accounts for regulatory requirements, data security, and client trust. Their business consulting approach meant we weren't just implementing AI; we were transforming how we serve clients while maintaining the highest standards.",
    name: 'Compliance Director',
    title: 'Financial Services Firm',
  },
  {
    id: 't6',
    category: 'AI Marketing Strategy & Deployment',
    quote:
      "Donor stewardship takes time we don't have. Grateful Marketing deployed an AI-powered strategy that segments our donor base and personalizes communication — thank-you messages, impact updates, and giving opportunities — all at scale. The technology is invisible to our donors; the communication feels deeply personal. Our donor retention has increased 35%.",
    name: 'Executive Director',
    title: 'Community Non-Profit',
  },
];

export default testimonials;
