const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  organizationProfile: {
    name: String,
    registrationNumber: String,
    foundedYear: Number,
    mission: String,
    vision: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zipCode: String
    },
    contactInfo: {
      email: String,
      phone: String,
      website: String
    },
    socialLinks: {
      facebook: String,
      twitter: String,
      linkedin: String
    }
  },
  projects: [{
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ['Planning', 'Active', 'Completed', 'On Hold'],
      default: 'Planning'
    },
    category: String,
    location: String,
    budget: {
      allocated: Number,
      spent: Number,
      currency: String
    },
    volunteers: [{
      volunteerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer'
      },
      role: String,
      status: String
    }],
    milestones: [{
      title: String,
      description: String,
      dueDate: Date,
      status: String
    }],
    documents: [{
      title: String,
      type: String,
      url: String,
      uploadDate: Date
    }]
  }],
  resources: [{
    name: String,
    type: String,
    quantity: Number,
    allocated: Number,
    available: Number,
    unit: String
  }],
  reports: [{
    title: String,
    type: String,
    period: String,
    submissionDate: Date,
    content: String,
    metrics: {
      volunteersEngaged: Number,
      beneficiariesReached: Number,
      hoursContributed: Number,
      projectsCompleted: Number
    },
    attachments: [{
      name: String,
      url: String
    }]
  }],
  documents: [{
    title: String,
    category: String,
    description: String,
    fileUrl: String,
    uploadDate: Date,
    tags: [String]
  }],
  analytics: {
    projectMetrics: {
      totalProjects: Number,
      activeProjects: Number,
      completedProjects: Number,
      successRate: Number
    },
    volunteerMetrics: {
      totalVolunteers: Number,
      activeVolunteers: Number,
      volunteerHours: Number,
      retentionRate: Number
    },
    impactMetrics: {
      beneficiariesServed: Number,
      communitiesReached: Number,
      fundsUtilized: Number,
      satisfactionScore: Number
    }
  }
}, {
  timestamps: true
});

const NGO = mongoose.model('NGO', ngoSchema);

module.exports = NGO; 