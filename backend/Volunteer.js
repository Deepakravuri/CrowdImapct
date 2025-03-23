const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  skills: [{
    type: String,
    trim: true
  }],
  interests: [{
    type: String,
    trim: true
  }],
  availability: {
    weekdays: {
      type: [String],
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    preferredTiming: {
      type: String,
      enum: ['Morning', 'Afternoon', 'Evening', 'Flexible']
    }
  },
  projectHistory: [{
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    role: String,
    startDate: Date,
    endDate: Date,
    hoursContributed: Number,
    status: {
      type: String,
      enum: ['Active', 'Completed', 'Withdrawn']
    },
    feedback: String
  }],
  impactMetrics: {
    totalProjects: {
      type: Number,
      default: 0
    },
    totalHours: {
      type: Number,
      default: 0
    },
    beneficiariesImpacted: {
      type: Number,
      default: 0
    },
    skillsEndorsements: {
      type: Map,
      of: Number,
      default: {}
    }
  },
  certificates: [{
    name: String,
    issuedBy: String,
    issueDate: Date,
    validUntil: Date,
    certificateUrl: String
  }],
  trainings: [{
    courseName: String,
    provider: String,
    completionDate: Date,
    status: {
      type: String,
      enum: ['In Progress', 'Completed']
    },
    certificateId: String
  }],
  communications: [{
    type: {
      type: String,
      enum: ['Message', 'Notification', 'Update']
    },
    title: String,
    content: String,
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    date: {
      type: Date,
      default: Date.now
    },
    read: {
      type: Boolean,
      default: false
    }
  }],
  profile: {
    bio: String,
    location: String,
    profilePicture: String,
    socialLinks: {
      linkedin: String,
      twitter: String,
      portfolio: String
    },
    languages: [{
      language: String,
      proficiency: {
        type: String,
        enum: ['Basic', 'Intermediate', 'Fluent', 'Native']
      }
    }]
  }
}, {
  timestamps: true
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer; 