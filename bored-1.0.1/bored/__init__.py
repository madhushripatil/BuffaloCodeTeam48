from bored import getActivityFromAccessibility, getActivityFromAccessibilityRange, getActivityFromKey, getActivityFromParticipants, getActivityFromPrice, getActivityFromPriceRange, getActivityFromType, getRandomActivity

# Bored API Wrapper
# Unoffical wrapper for https://www.boredapi.com/.

## Usage
### Activity Class

class Activity:
    activity = "" #string
    accessibility = 0.0 #float
    type = "" #string
    participants = 0 #int
    price = 0.0 #float
    link = "" #string
    key = 0 #int

    def __init__(self, activity, accessibility, type, participants, price, link, key):
        self.activity = activity
        self.accessibility = accessibility
        self.type = type
        self.participants = participants
        self.price = price
        self.link = link
        self.key = key
    
    def hasLink(self):
        if(self.link != ""):
            return True
        else:
            return False

    # def activity_print(self):
    #     print(self.activity,
    #     self.accessibility,
    #     self.type,
    #     self.participants,
    #     self.price,
    #     self.link,
    #     self.key)


### Get a random event
new_activity = Activity("",0.0,"",0,0.0,"",0)
new_activity = getRandomActivity()
print(new_activity.activity_print())


# ### Get Activity From Key

# getActivityFromKey(key)



# ### Get Activity From Type

# getActivityFromKey(type)



# ### Get Activity From Participants

# getActivityFromKey(participants)



# ### Get Activity From Price

# getActivityFromKey(price)



# ### Get Activity From Price Range

# getActivityFromKey(min, max)



# ### Get Activity From Accessibility

# getActivityFromAccessibility(accessibility)



# ### Get Activity From Accessibility Range

# getActivityFromAccessibility(min, max)

