// /components/TestimonialsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    comment:
      'This platform has transformed the way I learn. The courses are well-structured and the instructors are amazing!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Sarah Lee',
    role: 'UI/UX Designer',
    comment:
      'I love the community support! I always get my questions answered quickly and clearly.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Ahmed Ali',
    role: 'Data Scientist',
    comment:
      'The content is up-to-date and very practical. I could apply what I learned immediately to my job.',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Students Say
        </h2>
        <p className="text-neutral-600 mb-12">
          Real feedback from learners who trusted our platform.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-neutral-700 mb-4 text-center">{testimonial.comment}</p>
              <div>
                <h3 className="font-bold text-neutral-900">{testimonial.name}</h3>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
