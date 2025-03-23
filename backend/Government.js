const mongoose = require('mongoose');

const governmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  departmentProfile: {
    name: String,
    code: String,
    jurisdiction: String,
    level: {
      type: String,
      enum: ['Federal', 'State', 'Local']
    },
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
    headOfDepartment: {
      name: String,
      title: String,
      email: String
    }
  },
  policyGuidelines: [{
    title: String,
    description: String,
    category: String,
    publishDate: Date,
    effectiveDate: Date,
    status: {
      type: String,
      enum: ['Draft', 'Published', 'Under Review', 'Archived']
    },
    document: {
      url: String,
      version: String
    },
    tags: [String]
  }],
  projectOversight: [{
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'In Progress', 'Under Review', 'Completed']
    },
    budget: {
      allocated: Number,
      released: Number,
      utilized: Number,
      currency: String
    },
    timeline: {
      startDate: Date,
      endDate: Date,
      milestones: [{
        title: String,
        dueDate: Date,
        status: String
      }]
    },
    reviews: [{
      date: Date,
      reviewer: String,
      comments: String,
      rating: Number
    }]
  }],
  resourceDistribution: [{
    resourceType: String,
    totalQuantity: Number,
    allocated: [{
      organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NGO'
      },
      quantity: Number,
      date: Date,
      status: String
    }],
    available: Number,
    unit: String,
    lastUpdated: Date
  }],
  publicReports: [{
    title: String,
    category: String,
    period: {
      start: Date,
      end: Date
    },
    publishDate: Date,
    content: String,
    statistics: {
      projectsOverseen: Number,
      organizationsSupported: Number,
      resourcesDistributed: Number,
      beneficiariesReached: Number
    },
    attachments: [{
      name: String,
      url: String,
      type: String
    }],
    status: {
      type: String,
      enum: ['Draft', 'Published', 'Archived']
    }
  }]
}, {
  timestamps: true
});

const Government = mongoose.model('Government', governmentSchema);

module.exports = Government; 