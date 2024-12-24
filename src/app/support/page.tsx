"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageCircleIcon, MailIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export default function Support() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/send-email", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      if (response.data.success) {
        toast({
          title: "Message Sent",
          description: "I will get in touch with you soon :)",
        });
        setFormData({ name: "", email: "", message: "" });
        document.getElementById("name")?.focus();
      } else {
        toast({
          title: "Error",
          description: response.data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An unexpected error occurred.";
      toast({
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Support & Feedback</h1>
        <p className="text-muted-foreground">
          We&apos;re here to help! Send us your questions or feedback.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <MessageCircleIcon className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Quick Support</h3>
          </div>
          <p className="text-muted-foreground">
            Need immediate assistance? Check our FAQ section or reach out
            through our contact form.
          </p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <MailIcon className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Email Support</h3>
          </div>
          <p className="text-muted-foreground">
            For detailed inquiries, email us at support@zenux.live
          </p>
        </Card>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              disabled={loading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Send Message"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
