import React, { useState } from "react";

interface SubjectType {
  name: string;
  coef: number;
  grades: number[];
}

interface CategoryType {
  coef: number[];
  subjects: SubjectType[];
}

interface FormData {
  [key: string]: string[];
}

interface CreateFormProps {
  data: { [key: string]: CategoryType };
}

const CreateForm: React.FC<CreateFormProps> = ({ data }) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, dataset } = event.target;
    const index = dataset.index;
    if (index !== undefined) {
      const updatedGrades = [...(formData[name] || [])];
      updatedGrades[Number(index)] = value;
      setFormData({ ...formData, [name]: updatedGrades });
    }
  };

  return (
    <form>
      {Object.values(data).map((category) =>
        category.subjects.map((subject) => (
          <div key={subject.name}>
            <label htmlFor={subject.name}>{subject.name}</label>
            {category.coef.map((coef, index) => (
              <input
                type="text"
                id={`${subject.name}-${index}`}
                name={subject.name}
                data-index={index}
                value={formData[subject.name]?.[index] || ""}
                onChange={handleInputChange}
                placeholder={`Coef: ${coef}`}
              />
            ))}
          </div>
        ))
      )}
    </form>
  );
};

export default CreateForm;