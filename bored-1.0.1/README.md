# Bored API Wrapper
Unoffical wrapper for https://www.boredapi.com/.

## Usage
### Activity Class
```python
class Activity:
    activity = "" #string
    accessibility = 0.0 #float
    type = "" #string
    participants = 0 #int
    price = 0.0 #float
    link = "" #string
    key = 0 #int
```
---

### Get a random event
```python
getRandomActivity()
```
returns `Activity`

### Get Activity From Key
```python
getActivityFromKey(key)
```
returns `Activity`

### Get Activity From Type
```python
getActivityFromKey(type)
```
returns `Activity`

### Get Activity From Participants
```python
getActivityFromKey(participants)
```
returns `Activity`

### Get Activity From Price
```python
getActivityFromKey(price)
```
returns `Activity`

### Get Activity From Price Range
```python
getActivityFromKey(min, max)
```
returns `Activity`

### Get Activity From Accessibility
```python
getActivityFromAccessibility(accessibility)
```
returns `Activity`

### Get Activity From Accessibility Range
```python
getActivityFromAccessibility(min, max)
```
returns `Activity`