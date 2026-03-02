# Graphic Recording Prompt Construction Guide

## Prompt Template

Use this template as a base. Fill in slide content and theme colors. Prompts must be written in English.

```
Create a graphic recording / visual note illustration that summarizes the following content.

## Style Requirements
- Hand-drawn sketch style with clean, readable strokes
- White or very light background (use {background_color} tinted toward white)
- Bold section headers in {primary_color}
- Accent highlights, arrows, and connectors in {accent_color}
- Body text and labels in {text_color}
- Filled highlight boxes and banners using {surface_color}
- Mix of text keywords, simple icons, stick figures, speech bubbles, and connecting arrows
- Layout: organic, non-linear arrangement with visual hierarchy (largest = most important)
- No decorative borders or frames around the entire image
- All text must be in Japanese

## Content to Visualize
{slide_content}

## Key Visual Elements to Include
{visual_elements}
```

## Color Mapping Rules

| Graphic Recording Element | Theme Color to Use |
|---|---|
| Section headings / large keywords | `primary` |
| Arrows, connectors, highlight underlines | `accent` |
| Background | `background` (tinted toward white) |
| Body text and labels | `text` |
| Bordered boxes, banner backgrounds | `surface` |
| Emphasis boxes, speech bubble backgrounds | `surfaceAlt` or lighter shade of `surface` |

## Visual Element Selection

Extract the following from slide content and include in the prompt:

- **Keywords**: 3-5 core concepts → render as large text elements
- **Relationships**: cause-effect, sequence, contrast → express with arrows and connectors
- **Numbers/Data**: statistics, results → emphasize with simple charts or icons
- **People/Actions**: processes, roles → represent with stick figures or icons
- **Metaphors**: map abstract concepts to concrete objects → express with icons or illustrations

## Prompt Example

### Input: Survey Release Process Slide

```
Create a graphic recording / visual note illustration that summarizes the following content.

## Style Requirements
- Hand-drawn sketch style with clean, readable strokes
- White background
- Bold section headers in #02001A (dark navy)
- Accent highlights, arrows, and connectors in #DC3545 (red)
- Body text and labels in #1a1a1a
- Filled highlight boxes using #F5F6FA (light gray)
- Mix of text keywords, simple icons, stick figures, speech bubbles, and connecting arrows
- Layout: organic, non-linear arrangement with visual hierarchy
- No decorative borders or frames around the entire image
- All text must be in Japanese

## Content to Visualize
Survey release production process:
1. Theme design - Choose a newsworthy angle
2. Survey execution - Conduct questionnaire and collect responses
3. Data analysis - Create charts and extract insights
4. Release writing - Write as a press release article
5. Distribution - Distribute via PRTIMES etc. for reach

## Key Visual Elements to Include
- A flow from left to right showing the 5 steps
- Lightbulb icon for theme ideation
- Clipboard for survey execution
- Bar chart for data analysis
- Pen/document for writing
- Megaphone or broadcast icon for distribution
- Connecting arrows between each step
- Small stick figure of a marketer guiding the process
```
