<template>
    <div class="profile-form">
      <h2>Profile Information</h2>
      
      <form @submit.prevent="submitForm">

        <div v-if="isNext" >
            <h3>I am a...</h3>
            
            <div class="role-choice">
                <select id="role" v-model="selectedRole" required>
                    <option disabled value="">Please select your role</option>
                    <option>Mentor</option>
                    <option>Mentee</option>
                </select>
        
            </div>
            <button @click="toggleNext" :disabled="selectedRole === ''">Next</button>
        </div>
        <div v-else-if="selectedRole==='Mentee'">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="profile.name" required />
            </div>
      
            <!-- Email -->
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="profile.email" required />
            </div>

            <div class="form-group">
                <label for="demographic">Demographic</label>
                <select v-model="demographic" placeholder="Select" required>
                    <option disabled value="">Please select your demographic</option>
                    <option v-for="option in demographics" :value="option">{{ option }}</option>
                </select> 
            </div>

      
            <!-- College -->
            <div class="form-group">
              <label for="college">College</label>
              <select id="college" v-model="profile.college" required>
                <option disabled value="">Please select your college</option>
                <option v-for="college in colleges" :key="college" :value="college">
                  {{ college }}
                </option>
              </select>
            </div>
      
            <!-- Major -->
            <div class="form-group">
              <label for="major">Major</label>
              <input type="text" id="major" v-model="profile.major" />
            </div>
      
            <!-- Area of Interest -->
            <div class="form-group">
              <label for="interest">Area of Interest</label>
              <div class="tags-input">
                <span
                    v-for="(interest, index) in profile.interests"
                    :key="index"
                    class="tag"
                >
                    {{ interest }}
                    <button type="button" @click="removeInterest(index)">x</button>
                </span>
                
                <input
                    type="text"
                    v-model="newInterest"
                    @keydown.enter.prevent="addInterest"
                    placeholder="Type to add or select below"
                />
                </div>

                <div class="suggested-interests">
                <p>Select an interest:</p>
                <button
                    v-for="(interest, index) in suggestedInterests"
                    :key="index"
                    type="button"
                    @click="addSuggestedInterest(interest)"
                    :disabled="profile.interests.includes(interest)"
                >
                    {{ interest }}
                </button>
                </div>
            </div>
            <button @click="toggleNext">Back</button>
            <button type="submit">Submit</button>
        </div>
        <div v-else-if="selectedRole==='Mentor'">
            <div v-if="isMentorNext">
                <h3>I am a...</h3>
                
                <div class="role-choice">
                    <select id="role" v-model="selectedMentorRole" required>
                        <option disabled value="">Please select your role</option>
                        <option>Professional</option>
                        <option>Current Student</option>
                        <option>Alumni</option>
                    </select>
            
                </div>
                <button @click="toggleMentorNext" :disabled="selectedMentorRole === ''">Next</button>
            </div>
            <div v-else-if="selectedMentorRole !== ''">
                <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="profile.name" required />
                </div>
        
                <!-- Email -->
                <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="profile.email" required />
                </div>
        
                <!-- College -->
                <div v-if="selectedMentorRole==='Current Student' ||selectedMentorRole==='Alumni'" class="form-group">
                <label for="college">College</label>
                <select id="college" v-model="profile.college" required>
                    <option disabled value="">Please select your college</option>
                    <option v-for="college in colleges" :key="college" :value="college">
                    {{ college }}
                    </option>
                </select>
                </div>
      
                <div v-if="selectedMentorRole==='Current Student' ||selectedMentorRole==='Alumni'" class="form-group">
                <label for="major">Major</label>
                <input type="text" id="major" v-model="profile.major" />
                </div>
      
                <div v-if="selectedMentorRole==='Professional'" class="form-group">
                    <label for="company">Company</label>
                    <input type="text" id="company" v-model="profile.company" />
                </div>

                <div v-if="selectedMentorRole==='Professional'" class="form-group">
                    <label for="title">Job Title</label>
                    <input type="text" id="title" v-model="profile.title" />
                </div>

                <div v-if="selectedMentorRole==='Professional'" class="form-group">
                    <label for="yearsOfEx">Years of Experience</label>
                    <input type="number" id="yearsOfEx" v-model="profile.yearsOfEx" />
                </div>

                <!-- Area of Interest -->
                <div class="form-group">
                <label for="interest">Area of Specialty</label>
                <div class="tags-input">
                    <span
                        v-for="(interest, index) in profile.interests"
                        :key="index"
                        class="tag"
                    >
                        {{ interest }}
                        <button type="button" @click="removeInterest(index)">x</button>
                    </span>
                    
                    <input
                        type="text"
                        v-model="newInterest"
                        @keydown.enter.prevent="addInterest"
                        placeholder="Type to add or select below"
                    />
                </div>

                <div class="suggested-interests">
                    <p>Select a Specialty</p>
                    <button
                        v-for="(interest, index) in suggestedInterests"
                        :key="index"
                        type="button"
                        @click="addSuggestedInterest(interest)"
                        :disabled="profile.interests.includes(interest)"
                    >
                        {{ interest }}
                    </button>
                </div>
            </div>
            <button @click="toggleMentorNext">Back</button>
            <button type="submit">Submit</button>
        </div>
            <!-- <button @click="toggleNext">Back</button>
            <button v-if="!isMentorNext" type="submit">Submit</button> -->
        </div>
  
      </form>
    </div>
  </template>
  
  <script setup>
    import { reactive, ref } from 'vue';
    import { database } from '../firebase';
  
  const profile = reactive({
    name: '',
    email: '',
    role: "",
    college: '',
    major: '',
    demographic: '',
    interests: [],
    specialty: undefined,
    company: undefined,
    title: undefined,
    yearsOfEx: undefined
  });
  const isNext = ref(true);
  const selectedRole = ref("");
  const isMentorNext = ref(true);
  const selectedMentorRole = ref("");
  
  const colleges = [
    "College of Art and Design",
    "Saunders College of Business",
    "Golisano College of Computing and Information Sciences",
    "Kate Gleason College of Engineering",
    "College of Engineering Technology",
    "College of Health Sciences and Technology",
    "College of Liberal Arts",
    "National Technical Institute for the Deaf",
    "College of Science",
    "Golisano Institute for Sustainability",
    "School of Individualized Study"
  ];

  const newInterest = ref("");
    const suggestedInterests = [
    "Resume Review",
    "Academic Development",
    "Mock Interview",
    "Career Development",
    "Navigating Unwelcoming Spaces",
    "Diversity Discussion",
    ];

    const demographics = ref([
    "African American / Black",
    "Hispanic / Latino",
    "Asian / Asian American",
    "Native American / Indigenous",
    "Middle Eastern / North African",
    "Pacific Islander",
    "Multiracial",
    "Other (with a field to specify)"
  ]);
  const props = defineProps({
    toggleProfile: Function  
    }); 

    function addInterest() {
    if (newInterest.value && !profile.interests.includes(newInterest.value)) {
        profile.interests.push(newInterest.value);
    }
    newInterest.value = "";
    }

    function addSuggestedInterest(interest) {
    if (!profile.interests.includes(interest)) {
        profile.interests.push(interest);
    }
    }

    function removeInterest(index) {
    profile.interests.splice(index, 1);
    }


  function submitForm() {
    props.toggleProfile();
    writeUserData("user", profile.name, profile.email, profile.role)
    console.log('Profile submitted:', profile);

  }
  function toggleNext() {
    isNext.value = !isNext.value;
  }

  function toggleMentorNext() {
    isMentorNext.value = !isMentorNext.value;
  }

  const db = database;

  function writeUserData(userId, name, email, role) {
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        role: role
    })
    .then(() => {
        console.log("Data saved successfully!");
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
    });
    }

  </script>
  
  <style scoped>
  .role-choice {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 15px;
    padding: 10px;
  }

  .profile-form {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    background-color: #333;
    border: 3px solid #565555;
    border-radius: 8px;
    box-shadow: 10px 15px 15px rgba(80, 80, 80, 0.653);
  }
  
  .form-group {
    margin-bottom: 1rem;
    /* display: flex; */
    /* text-align: left; */
    /* flex-direction: row;
    gap: 15px;
    text-align: left;
    justify-content: space-around; */
  }
  
  label {
    display: block;
    text-align: left;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input,
  select {
    width: 90%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  select {
    appearance: none;
    width: 95%;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #6183a7;
    border: 1px solid #2b2828;
    border-radius: 4px;
    cursor: pointer;
    margin: 2px;
  }
  button:hover {
    background-color: #0056b3;
  }
  button:disabled {
    background-color: #2b2828;
  }

  .tags-input input {
    margin-top: 10px;
  }

  .tags-input button {
    padding: 4px 7px;
  }

  .tags-input span {
    /* border: 1px solid red; */
    margin: 5px;
  }
  </style>