
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  newsletter: z.boolean().default(false),
});

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | SuperBikes";
  }, []);

  // Setup form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      newsletter: false,
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background to-secondary/10 dark:from-background dark:to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our superbikes? Reach out to our team for personalized assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  We're here to help you
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground mt-1">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 10am-6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">info@superbikes.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-muted-foreground mt-1">Available on our website</p>
                    <p className="text-sm text-muted-foreground">24/7 support for urgent queries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160975847!2d72.73089901506799!3d19.082197838044336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1658932784955!5m2!1sen!2sin" 
                  className="w-full h-[200px] dark:invert dark:contrast-[0.8] dark:hue-rotate-180"
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SuperBikes Store Location"
                ></iframe>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-lg dark:bg-gray-800/50 overflow-hidden">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your inquiry..."
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="newsletter"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-secondary/20">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Subscribe to newsletter
                            </FormLabel>
                            <p className="text-sm text-muted-foreground">
                              Get updates on new bikes, promotions, and exclusive offers.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full md:w-auto group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Send Message <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-primary opacity-80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, UPI payments, net banking, and EMI options through our secure payment gateway."
  },
  {
    question: "Do you offer test rides?",
    answer: "Yes, we offer test rides at our authorized showrooms. Please book an appointment through our contact form."
  },
  {
    question: "What is the warranty policy?",
    answer: "All our superbikes come with a standard 2-year manufacturer warranty, with options to extend."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India. For international inquiries, please contact our team directly."
  },
  {
    question: "How long is the delivery process?",
    answer: "Delivery times vary by model and location, typically ranging from 2-4 weeks from order confirmation."
  },
  {
    question: "Do you offer servicing and maintenance?",
    answer: "Yes, we provide comprehensive servicing and maintenance at our authorized service centers nationwide."
  },
];

export default ContactPage;
