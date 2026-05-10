// import { useEffect, useRef } from "react";
// import "./styles/WhatIDo.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const WhatIDo = () => {
//   const containerRef = useRef<(HTMLDivElement | null)[]>([]);
//   const setRef = (el: HTMLDivElement | null, index: number) => {
//     containerRef.current[index] = el;
//   };
//   useEffect(() => {
//     if (ScrollTrigger.isTouch) {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.classList.remove("what-noTouch");
//           container.addEventListener("click", () => handleClick(container));
//         }
//       });
//     }
//     return () => {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.removeEventListener("click", () => handleClick(container));
//         }
//       });
//     };
//   }, []);
//   return (
//     <div className="whatIDO">
//       <div className="what-box">
//         <h2 className="title">
//           W<span className="hat-h2">HAT</span>
//           <div>
//             I<span className="do-h2"> DO</span>
//           </div>
//         </h2>
//       </div>
//       <div className="what-box">
//         <div className="what-box-in">
//           <div className="what-border2">
//             <svg width="100%">
//               <line
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//               <line
//                 x1="100%"
//                 y1="0"
//                 x2="100%"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//             </svg>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 0)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="0"
//                   x2="100%"
//                   y2="0"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>
//             {/* <div className="what-content-in">
//               <h3>Full Stack Eng</h3>
//               <h4>Building Interactive UIs</h4>
//               <p>
//                 Full Stack Engineer specializing in modern web stacks (React, Node.js, REST/GraphQL APIs, cloud infrastructure). I own features from database schema to deployment — writing code that's fast, tested, and built to last.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">TypeScript</div>
//                 <div className="what-tags">JavaScript</div>
//                 <div className="what-tags">HTML5</div>
//                 <div className="what-tags">CSS3</div>
//                 <div className="what-tags">React.js</div>
//                 <div className="what-tags">Tailwind CSS</div>
//                 <div className="what-tags">Shadcn UI</div>
//                 <div className="what-tags">Node.js</div>
//                 <div className="what-tags">Express.js</div>
//                 <div className="what-tags">MongoDB</div>
//                 <div className="what-tags">PostgreSQL</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div> */}
//             <div className="what-content-in">
//               <div className="what-content-header">
//                 <h3>Full Stack Engineer</h3>
//                 <h4>Building Interactive UIs</h4>
//               </div>

//               <p>
//                 Specializing in modern web stacks — from database schema to deployment.
//                 I build fast, tested, and scalable features across the entire stack.
//               </p>

//               <div className="what-content-skills">
//                 <h5>Skillset & Tools</h5>
//                 <div className="what-content-flex">
//                   {[
//                     "TypeScript", "JavaScript", "HTML5", "CSS3",
//                     "React.js", "Tailwind CSS", "Shadcn UI",
//                     "Node.js", "Express.js", "MongoDB", "PostgreSQL",
//                   ].map((skill) => (
//                     <span key={skill} className="what-tags">{skill}</span>
//                   ))}
//                 </div>
//               </div>

//               <div className="what-arrow" aria-hidden="true" />
//             </div>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 1)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>
//             <div className="what-content-in">
//               <h3>DevOps</h3>
//               <h4>Scalable Server Architecture</h4>
//               <p>
//                 Designing robust APIs and microservices. From CMS platforms to
//                 complex business logic, I build backends that scale.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">Node.js</div>

//                 <div className="what-tags">Express.js</div>
//                 <div className="what-tags">MongoDB</div>
//                 <div className="what-tags">PostgreSQL</div>
//                 <div className="what-tags">REST APIs</div>
//                 <div className="what-tags">Microservices</div>
//                 <div className="what-tags">Python</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div>
//           {/* <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 2)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="0"
//                   x2="100%"
//                   y2="0"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>
//             <div className="what-content-in">
//               <h3>DEVOPS</h3>
//               <h4>Scalable Server Architecture</h4>
//               <p>
//                 Designing robust APIs and microservices. From CMS platforms to
//                 complex business logic, I build backends that scale.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">AWS</div>
//                 <div className="what-tags">Docker</div>
//                 <div className="what-tags">Kubernetes</div>
//                 <div className="what-tags">Jenkins</div>
//                 <div className="what-tags">GitHub Action</div>
//                 <div className="what-tags">Grafana</div>
//                 <div className="what-tags">Prometheus</div>
//                 <div className="what-tags">shell scripting</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatIDo;

// function handleClick(container: HTMLDivElement) {
//   container.classList.toggle("what-content-active");
//   container.classList.remove("what-sibling");
//   if (container.parentElement) {
//     const siblings = Array.from(container.parentElement.children);

//     siblings.forEach((sibling) => {
//       if (sibling !== container) {
//         sibling.classList.remove("what-content-active");
//         sibling.classList.toggle("what-sibling");
//       }
//     });
//   }
// }


import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  {
    title: "Full Stack Dev",
    subtitle: "Building Interactive UIs",
    desc: "Specializing in modern web stacks — from database schema to deployment. I build fast, tested, and scalable features across the entire stack.",
    skills: [
      "TypeScript", "JavaScript", "HTML5", "CSS3",
      "React.js", "Tailwind CSS", "Shadcn UI",
      "Node.js", "Express.js", "MongoDB", "PostgreSQL",
    ],
    borderTop: true,
    borderBottom: true,
  },
  {
    title: "DevOps Engineer",
    subtitle: "CI/CD, Cloud & Infrastructure",
    desc: "Building and maintaining scalable infrastructure — automating deployments, managing cloud environments, and keeping systems reliable, observable, and secure.",
    skills: [
      "AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins",
      "CI/CD", "Nginx", "Linux", "Shell Scripting",
      "Prometheus", "Grafana",
    ],
    borderTop: false,
    borderBottom: true,
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;

    const handlers = new Map<HTMLDivElement, () => void>();

    containerRef.current.forEach((container) => {
      if (!container) return;
      container.classList.remove("what-noTouch");
      const handler = () => handleClick(container);
      handlers.set(container, handler);
      container.addEventListener("click", handler);
    });

    return () => {
      handlers.forEach((handler, container) => {
        container.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {cards.map((card, i) => (
            <div
              key={card.title}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, i)}
            >
              <div className="what-border1">
                <svg height="100%">
                  {card.borderTop && (
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  )}
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>

              <div className="what-corner" />

              <div className="what-content-in">
                <div className="what-content-header">
                  <h3>{card.title}</h3>
                  <h4>{card.subtitle}</h4>
                </div>

                <p>{card.desc}</p>

                <div className="what-content-skills">
                  <h5>Skillset & Tools</h5>
                  <div className="what-content-flex">
                    {card.skills.map((skill) => (
                      <span key={skill} className="what-tags">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="what-arrow" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    Array.from(container.parentElement.children).forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}