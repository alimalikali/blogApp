import { BlogPost, Author, Category } from "@/types/blog"

export const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    bio: "Frontend developer passionate about React, TypeScript, and modern web technologies. Loves sharing knowledge through writing.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
    social: {
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
  },
  {
    id: "2",
    name: "Alex Chen",
    bio: "Full-stack engineer with expertise in Node.js, Python, and cloud architecture. Enjoys building scalable applications.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    social: {
      twitter: "https://twitter.com/alexchen",
      github: "https://github.com/alexchen",
    },
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    bio: "UX/UI designer turned developer. Passionate about creating beautiful, accessible, and user-friendly web experiences.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/mariarodriguez",
      website: "https://mariarodriguez.dev",
    },
  },
]

export const categories: Category[] = [
  {
    id: "1",
    name: "Web Development",
    description: "Frontend and backend development tutorials, tips, and best practices",
    postCount: 12,
  },
  {
    id: "2",
    name: "Design",
    description: "UI/UX design principles, tools, and creative processes",
    postCount: 8,
  },
  {
    id: "3",
    name: "Technology",
    description: "Latest tech trends, industry news, and emerging technologies",
    postCount: 15,
  },
  {
    id: "4",
    name: "Career",
    description: "Professional development, career advice, and industry insights",
    postCount: 6,
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern React Applications with TypeScript",
    excerpt: "Learn how to leverage TypeScript's powerful type system to build more robust and maintainable React applications.",
    content: `# Building Modern React Applications with TypeScript

TypeScript has become an essential tool for React developers who want to build large-scale, maintainable applications. In this comprehensive guide, we'll explore how to effectively use TypeScript with React to create robust, type-safe applications.

## Why TypeScript with React?

TypeScript brings several benefits to React development:

1. **Type Safety**: Catch errors at compile time rather than runtime
2. **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
3. **Self-Documenting Code**: Types serve as inline documentation
4. **Improved Refactoring**: Safe and reliable code changes

## Setting Up Your Project

The easiest way to start a new React TypeScript project is using Create React App:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

## Component Types

Let's look at different ways to type React components:

### Function Components

\`\`\`tsx
interface Props {
  title: string;
  count: number;
  onIncrement: () => void;
}

const Counter: React.FC<Props> = ({ title, count, onIncrement }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};
\`\`\`

### Component with Children

\`\`\`tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};
\`\`\`

## Hooks with TypeScript

TypeScript works seamlessly with React hooks:

### useState

\`\`\`tsx
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);
\`\`\`

### useEffect

\`\`\`tsx
useEffect(() => {
  const fetchUser = async () => {
    try {
      const userData = await api.getUser(userId);
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  fetchUser();
}, [userId]);
\`\`\`

## Best Practices

1. **Use strict TypeScript configuration**
2. **Define interfaces for props and state**
3. **Leverage type inference when possible**
4. **Use generic types for reusable components**
5. **Type your API responses**

## Conclusion

TypeScript and React make a powerful combination for building modern web applications. The type safety and developer experience improvements make it worth the initial learning curve.

Start small, gradually add types to your existing React projects, and you'll soon appreciate the benefits TypeScript brings to your development workflow.`,
    author: authors[0],
    publishedAt: "2024-01-15",
    readTime: 8,
    tags: ["React", "TypeScript", "Web Development", "Frontend"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Explore the latest design trends that are shaping the future of web experiences, from micro-interactions to AI-powered personalization.",
    content: `# The Future of Web Design: Trends to Watch in 2024

Web design continues to evolve at a rapid pace, driven by technological advances, changing user expectations, and new creative possibilities. As we move through 2024, several key trends are emerging that will shape how we design and build web experiences.

## 1. AI-Powered Personalization

Artificial intelligence is revolutionizing how websites adapt to individual users. We're seeing:

- **Dynamic content generation** based on user behavior
- **Personalized layouts** that adjust to user preferences
- **Intelligent recommendation systems** that improve engagement

## 2. Micro-Interactions and Subtle Animations

Small details make a big difference in user experience:

- **Hover effects** that provide immediate feedback
- **Loading animations** that keep users engaged
- **Transition effects** that guide attention and create flow

## 3. Dark Mode and Adaptive Themes

Dark mode isn't just a trend—it's becoming a standard expectation:

- **System-aware themes** that automatically switch based on user preferences
- **Custom color schemes** for brand differentiation
- **Accessibility improvements** through better contrast options

## 4. Immersive 3D Elements

WebGL and CSS 3D transforms are making 3D web experiences more accessible:

- **3D product showcases** for e-commerce
- **Interactive 3D illustrations** for storytelling
- **Depth and layering** effects for visual hierarchy

## 5. Voice User Interfaces

Voice interaction is becoming more prevalent in web design:

- **Voice search optimization**
- **Audio-first navigation** for accessibility
- **Voice-controlled forms** and interactions

## Implementation Tips

### Performance First
Always prioritize performance when implementing new design trends:

\`\`\`css
/* Use transform instead of changing layout properties */
.element {
  transform: translateX(100px);
  transition: transform 0.3s ease;
}
\`\`\`

### Progressive Enhancement
Implement advanced features as enhancements:

\`\`\`javascript
// Check for WebGL support before adding 3D elements
if (window.WebGLRenderingContext) {
  // Add 3D features
} else {
  // Fallback to 2D alternative
}
\`\`\`

## Conclusion

The future of web design is exciting and full of possibilities. By staying informed about these trends and implementing them thoughtfully, we can create web experiences that are not only beautiful but also functional, accessible, and performant.

Remember, trends should enhance the user experience, not overshadow the content or make the interface harder to use. Always prioritize usability and accessibility in your design decisions.`,
    author: authors[2],
    publishedAt: "2024-01-12",
    readTime: 6,
    tags: ["Design", "Trends", "UI/UX", "Web Design"],
    category: "Design",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "Mastering CSS Grid: A Complete Guide",
    excerpt: "Dive deep into CSS Grid and learn how to create complex, responsive layouts with ease. From basic concepts to advanced techniques.",
    content: `# Mastering CSS Grid: A Complete Guide

CSS Grid is one of the most powerful layout systems available in CSS. It allows you to create complex, responsive layouts with just a few lines of code. In this comprehensive guide, we'll explore everything you need to know about CSS Grid.

## Grid Basics

CSS Grid is a two-dimensional layout system that allows you to work with both rows and columns simultaneously.

### Creating a Grid Container

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}
\`\`\`

### Grid Item Placement

\`\`\`css
.grid-item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
\`\`\`

## Advanced Techniques

### Named Grid Lines

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];
  grid-template-rows: [header-start] auto [header-end content-start] 1fr [content-end];
}
\`\`\`

### Grid Areas

\`\`\`css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Grid Layouts

### Auto-Fit and Auto-Fill

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
\`\`\`

### Media Queries with Grid

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: 250px 1fr;
  }
}
\`\`\`

## Best Practices

1. **Start with mobile-first design**
2. **Use semantic HTML structure**
3. **Leverage CSS Grid alongside Flexbox**
4. **Test across different browsers**
5. **Consider accessibility in your layouts**

## Conclusion

CSS Grid is a game-changer for web layout. With its powerful features and intuitive syntax, you can create complex, responsive designs that adapt to any screen size.

The key is to practice and experiment with different grid configurations. Start with simple layouts and gradually work your way up to more complex designs.`,
    author: authors[0],
    publishedAt: "2024-01-10",
    readTime: 10,
    tags: ["CSS", "Grid", "Layout", "Web Development"],
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Building Your Developer Career: Tips from Industry Veterans",
    excerpt: "Learn from experienced developers about building a successful career in tech, from junior to senior levels and beyond.",
    content: `# Building Your Developer Career: Tips from Industry Veterans

Building a successful career in software development requires more than just technical skills. In this article, we'll share insights from industry veterans on how to navigate your career path effectively.

## Early Career (0-3 years)

### Focus on Fundamentals
- Master at least one programming language deeply
- Understand computer science fundamentals
- Learn version control (Git) thoroughly
- Practice problem-solving regularly

### Build Your Portfolio
- Create personal projects that showcase your skills
- Contribute to open source projects
- Write technical blog posts
- Build a professional online presence

## Mid-Career (3-7 years)

### Specialize and Diversify
- Develop expertise in specific domains
- Learn complementary technologies
- Understand business requirements
- Mentor junior developers

### Leadership Skills
- Learn to communicate effectively
- Practice project management
- Understand team dynamics
- Develop technical leadership abilities

## Senior Career (7+ years)

### Strategic Thinking
- Understand business impact of technical decisions
- Design scalable systems and architectures
- Lead technical initiatives
- Drive technical strategy

### Growing Others
- Mentor and coach team members
- Share knowledge through speaking and writing
- Build inclusive and productive teams
- Create learning opportunities for others

## Universal Career Tips

### Never Stop Learning
Technology evolves rapidly. Stay current by:
- Following industry news and trends
- Taking online courses and certifications
- Attending conferences and meetups
- Experimenting with new technologies

### Build Your Network
- Attend local tech meetups
- Participate in online communities
- Maintain relationships with colleagues
- Be helpful and supportive to others

### Document Your Journey
- Keep track of your accomplishments
- Maintain an updated resume
- Create case studies of your work
- Regularly update your LinkedIn profile

## Common Career Pitfalls to Avoid

1. **Focusing only on technical skills** - Soft skills are equally important
2. **Job hopping too frequently** - Build depth of experience
3. **Avoiding challenging projects** - Growth comes from stretching yourself
4. **Neglecting communication skills** - Learn to explain technical concepts clearly
5. **Not seeking feedback** - Regular feedback accelerates growth

## Conclusion

A successful developer career is built on continuous learning, strong relationships, and the ability to adapt to change. Focus on becoming a well-rounded professional who can contribute both technically and as a team member.

Remember, everyone's path is different. Find what works for you and don't be afraid to take calculated risks that align with your goals.`,
    author: authors[1],
    publishedAt: "2024-01-08",
    readTime: 7,
    tags: ["Career", "Professional Development", "Industry Insights"],
    category: "Career",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "The Rise of Edge Computing: What Developers Need to Know",
    excerpt: "Explore how edge computing is changing the landscape of web development and what it means for building modern applications.",
    content: `# The Rise of Edge Computing: What Developers Need to Know

Edge computing is revolutionizing how we think about web applications, bringing computation closer to users and enabling new possibilities for performance and user experience.

## What is Edge Computing?

Edge computing moves computation from centralized cloud servers to locations closer to end users - "the edge" of the network.

### Key Benefits

1. **Reduced Latency** - Faster response times
2. **Better Performance** - Improved user experience
3. **Increased Reliability** - Less dependency on central servers
4. **Cost Efficiency** - Reduced bandwidth usage

## Edge Computing for Web Developers

### Edge Functions
Execute server-side code at the edge:

\`\`\`javascript
// Example edge function
export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  
  return new Response(\`Hello, \${name}!\`, {
    headers: { 'content-type': 'text/plain' },
  });
}
\`\`\`

### Content Delivery Networks (CDNs)
Modern CDNs do more than just cache static content:

- **Dynamic content generation**
- **API request routing**
- **Security filtering**
- **A/B testing**

### Edge Databases
Store data closer to users:

- **Reduced query latency**
- **Improved data locality**
- **Better compliance with data regulations**

## Popular Edge Platforms

### Cloudflare Workers
- JavaScript runtime at the edge
- Global distribution
- Serverless execution model

### Vercel Edge Functions
- TypeScript/JavaScript support
- Integrated with Next.js
- Automatic deployment

### AWS Lambda@Edge
- Node.js and Python support
- Integration with CloudFront
- Pay-per-request pricing

## Best Practices

### Optimize for Edge Constraints
- Keep functions lightweight
- Minimize cold start times
- Use efficient data formats
- Cache aggressively

### Design for Distribution
- Handle network partitions gracefully
- Use eventual consistency models
- Implement proper error handling
- Consider data synchronization

## The Future of Edge Computing

Edge computing is still evolving, with new capabilities emerging:

- **WebAssembly at the edge**
- **Machine learning inference**
- **Real-time data processing**
- **IoT integration**

## Getting Started

1. **Choose an edge platform** that fits your needs
2. **Start with simple functions** to learn the basics
3. **Measure performance improvements**
4. **Gradually migrate more functionality**

## Conclusion

Edge computing represents a significant shift in how we build and deploy web applications. By bringing computation closer to users, we can create faster, more responsive experiences.

As a developer, understanding edge computing will be crucial for building the next generation of web applications. Start experimenting with edge platforms today to gain experience with this powerful paradigm.`,
    author: authors[1],
    publishedAt: "2024-01-05",
    readTime: 8,
    tags: ["Edge Computing", "Performance", "Technology", "Cloud"],
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "6",
    title: "Designing Accessible Web Interfaces",
    excerpt: "Learn the principles and best practices for creating web interfaces that are accessible to all users, regardless of their abilities.",
    content: `# Designing Accessible Web Interfaces

Creating accessible web interfaces isn't just about compliance—it's about building inclusive experiences that work for everyone. This guide covers essential principles and practical techniques for accessible design.

## Understanding Web Accessibility

Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with web content effectively.

### Who Benefits from Accessibility?

- **People with visual impairments** (blindness, low vision, color blindness)
- **People with hearing impairments** (deafness, hard of hearing)
- **People with motor impairments** (limited dexterity, paralysis)
- **People with cognitive impairments** (dyslexia, ADHD, autism)
- **Everyone using different devices or in challenging environments**

## The Four Principles of Accessibility (POUR)

### 1. Perceivable
Information must be presentable in ways users can perceive.

**Implementation:**
- Provide text alternatives for images
- Use sufficient color contrast
- Make content adaptable to different presentations
- Offer captions for videos

### 2. Operable
Interface components must be operable by all users.

**Implementation:**
- Make all functionality keyboard accessible
- Give users enough time to read content
- Don't use content that causes seizures
- Help users navigate and find content

### 3. Understandable
Information and UI operation must be understandable.

**Implementation:**
- Make text readable and understandable
- Make content appear and operate predictably
- Help users avoid and correct mistakes

### 4. Robust
Content must be robust enough for various assistive technologies.

**Implementation:**
- Use valid, semantic HTML
- Ensure compatibility with screen readers
- Follow web standards and best practices

## Practical Implementation

### Semantic HTML
Use appropriate HTML elements for their intended purpose:

\`\`\`html
<!-- Good: Semantic structure -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>

<!-- Bad: Non-semantic structure -->
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
    <div class="link">About</div>
  </div>
</div>
\`\`\`

### ARIA Labels and Roles
Enhance HTML semantics when needed:

\`\`\`html
<!-- Descriptive labels -->
<button aria-label="Close dialog">×</button>

<!-- Form labels -->
<label for="email">Email Address</label>
<input type="email" id="email" required aria-describedby="email-help">
<div id="email-help">We'll never share your email</div>

<!-- Navigation landmarks -->
<nav aria-label="Main navigation">
  <!-- navigation links -->
</nav>
\`\`\`

### Color and Contrast
Ensure sufficient contrast ratios:

\`\`\`css
/* Minimum contrast ratios */
/* Normal text: 4.5:1 */
/* Large text (18pt+): 3:1 */
/* UI components: 3:1 */

.high-contrast-text {
  color: #212529; /* Dark gray on white */
  background-color: #ffffff;
}

.accessible-button {
  background-color: #0066cc;
  color: #ffffff;
  border: 2px solid #004499;
}

.accessible-button:focus {
  outline: 3px solid #ff6b35;
  outline-offset: 2px;
}
\`\`\`

### Keyboard Navigation
Ensure all interactive elements are keyboard accessible:

\`\`\`css
/* Visible focus indicators */
button:focus,
a:focus,
input:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #0066cc;
  color: white;
  padding: 8px;
  text-decoration: none;
}

.skip-link:focus {
  top: 6px;
}
\`\`\`

## Testing for Accessibility

### Automated Testing Tools
- **axe-core** - Browser extension and API
- **Lighthouse** - Built into Chrome DevTools
- **WAVE** - Web accessibility evaluation tool

### Manual Testing
- **Keyboard navigation** - Tab through your interface
- **Screen reader testing** - Use NVDA, JAWS, or VoiceOver
- **Color contrast checking** - Use contrast analyzer tools
- **Mobile accessibility** - Test with mobile screen readers

### User Testing
Include users with disabilities in your testing process to get real-world feedback.

## Common Accessibility Mistakes

1. **Missing alt text** for images
2. **Poor color contrast** ratios
3. **Keyboard traps** or inaccessible navigation
4. **Missing form labels**
5. **Auto-playing media** without controls
6. **Relying solely on color** to convey information

## Accessibility Tools and Resources

### Development Tools
- **React Testing Library** - Encourages accessible patterns
- **ESLint plugins** - jsx-a11y for React projects
- **Storybook accessibility addon**

### Design Tools
- **Figma accessibility plugins**
- **Color contrast checkers**
- **Typography accessibility guidelines**

## Building an Accessible Culture

### Team Education
- **Regular accessibility training**
- **Include accessibility in design reviews**
- **Set up automated accessibility testing**
- **Make accessibility part of your definition of done**

### Documentation
- **Create accessibility guidelines**
- **Document component accessibility features**
- **Maintain accessibility checklists**

## Conclusion

Accessibility is not a feature—it's a fundamental aspect of good web development. By incorporating accessibility principles from the start of your design process, you create better experiences for all users.

Start small: ensure good color contrast, add proper labels, and test with keyboard navigation. Gradually expand your accessibility knowledge and implementation as you build more inclusive web experiences.

Remember, accessibility is an ongoing process, not a one-time task. Stay informed about accessibility standards and continuously improve your skills in creating inclusive web interfaces.`,
    author: authors[2],
    publishedAt: "2024-01-03",
    readTime: 12,
    tags: ["Accessibility", "Design", "UX", "Inclusive Design"],
    category: "Design",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
  },
]