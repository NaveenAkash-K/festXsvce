// SvceEmailForm.tsx
import React, { useState, useEffect } from "react";

interface SvceEmailFormProps {
  formData: {
    name: string;
    idNumber: string;
    collegeMail: string;
    phoneNumber: string;
  };
}

interface Event {
  name: string;
  value: number;
}

const SvceEmailForm: React.FC<SvceEmailFormProps> = ({ formData }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
    useEffect(() => {
      const hasSameValue = selectedEvents.some((event, index, array) =>
        array.slice(0, index).some((other) => other.value === event.value)
      );
  
      if (hasSameValue) {
        setErrorMessage("You are selecting events that are happening at the same time.");
      } else {
        setErrorMessage(null);
      }
    }, [selectedEvents]);
  
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSelectedOptions((prevOptions) => {
        if (prevOptions.includes(value)) {
          // Deselect the option if it's already selected
          return prevOptions.filter((option) => option !== value);
        } else {
          // Deselect all events if the option is changed
          setSelectedEvents([]);
          return [...prevOptions, value];
        }
      });
    };
  
    const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>, event: Event) => {
        const isCurrentlyChecked = e.target.checked;
      
        if (isCurrentlyChecked) {
          const isSameValueSelected = selectedEvents.some((selectedEvent) => selectedEvent.value === event.value);
      
          if (isSameValueSelected) {
            setErrorMessage("You are selecting events that are happening at the same time.");
            return;
          }
        }
      
        setErrorMessage(null);
      
        setSelectedEvents((prevEvents) => {
          const updatedEvents = isCurrentlyChecked
            ? [...prevEvents, event]
            : prevEvents.filter((selectedEvent) => selectedEvent.value !== event.value);
      
          return updatedEvents;
        });
      };
      
      
  
    const handleProceedClick = () => {
      // Add logic to handle the selected options and events and proceed accordingly
      console.log("Selected Options:", selectedOptions);
      console.log("Selected Events:", selectedEvents);
    };
  
    // Dummy list of events for Option 1 with integer values
    const eventsList: Event[] = [
      { name: "Event A", value: 1 },
      { name: "Event B", value: 2 },
      { name: "Event C", value: 1 },
    ];
  
    return (
      <div>
        <p>This is the SvceEmailForm component.</p>
  
        <div>
          <h3>Select option(s):</h3>
          <label>
            <input
              type="checkbox"
              value="option1"
              checked={selectedOptions.includes("option1")}
              onChange={handleOptionChange}
            />
            Option 1
          </label>
        </div>
  
        {selectedOptions.includes("option1") && (
          <div>
            <h3>Select event(s):</h3>
            {eventsList.map((event) => (
              <label key={event.value}>
                <input
                  type="checkbox"
                  value={event.value.toString()}  // Use event value as the checkbox value
                  checked={selectedEvents.some((selectedEvent) => selectedEvent.value === event.value)}
                  onChange={(e) => handleEventChange(e, event)}
                />
                {event.name}
              </label>
            ))}
          </div>
        )}
  
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  
        <button onClick={handleProceedClick}>Proceed</button>
      </div>
    );
  };
  
  export default SvceEmailForm;