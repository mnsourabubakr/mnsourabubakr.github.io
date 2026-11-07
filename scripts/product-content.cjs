// Each estimate is a draft scenario, in minutes: [manual range], [add-in range].
// The scope describes the same deliverable and starting point on both sides.
module.exports = {
  '01': {
    slug: 'isolated-footing-rebar', name: 'Isolated Footing Rebar',
    headline: ['Detail isolated footings.', 'Repeat the setup across matching types.'],
    lead: 'Set up top and bottom meshes, side bars, and concrete cover in Revit. Apply the same reinforcement settings to a representative footing or to every matching instance.',
    value: ['Keep footing details consistent across the model', 'A small change in spacing or cover can mean revisiting dozens of footings. Set the reinforcement rules by type, then check the generated bars against your detailing requirements.'],
    rows: [
      ['Set up mesh reinforcement', 'Lay out the upper and lower meshes and adjust the spacing for each footing.', 'Configure mesh layers, bar diameters, and spacing in one setup.'],
      ['Place side bars and constrain cover', 'Place bars around the perimeter and adjust their cover constraints individually.', 'Generate the side bars and apply the configured cover constraints.'],
      ['Repeat across matching footings', 'Copy or recreate the detail and check each footing.', 'Select a footing type and apply to one or all matching instances.']
    ],
    study: ['An isolated footing with top mesh, bottom mesh, and side bars', 'Starts from modeled footings with bar types and cover requirements defined. Both workflows include a visual check.'],
    scenarios: [
      ['One footing', [15, 25], [1, 2], 'Place both meshes and the side bars, then check cover.', 'Set bar sizes, spacing, and cover. Generate and review the footing.'],
      ['Ten matching footings', [45, 70], [3, 5], 'Reuse or place reinforcement and verify it on the ten footings.', 'Set the footing type once, apply to all ten, and spot-check the results.']
    ],
    visual: 'Revit model showing the generated reinforcement cage of an isolated footing.'
  },
  '02': {
    slug: 'column-reinforcement', name: 'Column Reinforcement',
    headline: ['Set up the column cage.', 'Apply it to matching columns.'],
    lead: 'Configure longitudinal bars, foundation starters, and stirrup zones for rectangular, square, or circular concrete columns in Revit.',
    value: ['Review one representative cage before working in batches', 'Longitudinal bars, starter bars, and stirrup zones have different settings. Build the reference arrangement, check existing hosted reinforcement, and use the reviewed setup on matching columns.'],
    rows: [
      ['Configure the main bars and starters', 'Lay out bars by face or around the perimeter, then set extensions and foundation embedment.', 'Set bar counts, optional layers, extensions, and starter details for the column shape.'],
      ['Set stirrup zones', 'Calculate zone lengths, then place and space stirrups for each zone.', 'Use Egyptian Code-based or user-defined zone lengths and configure the three spacing zones.'],
      ['Repeat the reviewed cage', 'Rebuild or copy reinforcement, then verify hosts and existing bars.', 'Prepare the reference section, check hosted rebar, and apply to matching columns.']
    ],
    study: ['Detailing longitudinal bars, starters, and three stirrup zones', 'Column geometry and reinforcement requirements are already defined. Both workflows include setting up the reference cage and checking the modeled result.'],
    scenarios: [
      ['One rectangular column', [20, 25], [1, 2], 'Model longitudinal bars, starters, and stirrups, then review the cage.', 'Configure the reference cage, generate bars and stirrups, then review.'],
      ['Twenty similar columns', [120, 180], [3, 5], 'Reuse the cage where possible, then verify hosts and reinforcement on each column.', 'Prepare the reference arrangement, apply to matching columns, and sample-check the result.']
    ],
    visual: 'Revit column reinforcement showing longitudinal bars and stirrup arrangements.'
  },
  '03': {
    slug: 'additional-rebar-from-cad', name: 'Additional Rebar from CAD',
    headline: ['Turn CAD rebar details', 'into modeled reinforcement.'],
    lead: 'Read reinforcement linework and annotations from a selected AutoCAD layer and generate additional top or bottom Revit bars for flat slabs and rafts.',
    value: ['Use the drawing you already have', 'Additional reinforcement can be spread across dozens of zones. Use the drawing as the input for bar layout and spacing, then review the Revit bars against the source detail.'],
    rows: [
      ['Read the reinforcement detail', 'Inspect each zone and transfer bar geometry and spacing into Revit.', 'Select the CAD layer that carries the reinforcement linework and annotations.'],
      ['Model the additional bars', 'Place and distribute the bars for each zone individually.', 'Generate the top or bottom additional bars from the selected detail.'],
      ['Verify the result', 'Compare the manually modeled bars with the detail drawing.', 'Compare generated bars with the drawing before issuing the model.']
    ],
    study: ['Modeling additional rebar in a flat slab or raft', 'Starts from an imported drawing with usable reinforcement layers and annotations, and a modeled concrete host. Includes checking bar placement against the drawing.'],
    scenarios: [
      ['One layer · 10 zones', [35, 60], [2, 3], 'Model and review the bars across ten additional reinforcement zones.', 'Select the layer, generate the bars, and review the ten zones.'],
      ['Top and bottom · 40 zones total', [120, 210], [4, 8], 'Rebuild both layers and review the bar distributions by zone.', 'Generate each layer in turn and spot-check the bars against the source detail.']
    ],
    visual: 'Additional reinforcement modeled in Revit from slab or raft CAD details.'
  },
  '04': {
    slug: 'rebar-visibility-control', name: 'Rebar Visibility Control',
    heroLabel: 'Example reinforcement view · Autodesk Revit',
    headline: ['Put reinforcement in view.', 'Get back to the review.'],
    lead: 'Show, hide, and restore reinforcement in Revit plan, section, and 3D views from a dedicated control.',
    value: ['Keep the view focused on the current coordination question', 'Reinforcement can help or obscure a review depending on what you are checking. Switch it on for the reinforcement discussion and restore visibility when you move on.'],
    rows: [
      ['Change rebar visibility', 'Open Visibility/Graphics in the view and change the relevant setting.', 'Use the show or hide action in the tool.'],
      ['Handle multiple review views', 'Repeat the change in each view that needs it.', 'Apply the same visibility action to the selected views together.'],
      ['Restore visibility', 'Revisit the affected views after the review.', 'Use the restore action and check the resulting view.']
    ],
    study: ['Changing rebar visibility for a coordination review', 'The target views already exist. Estimates cover changing the rebar display and verifying that the relevant views reflect the change.'],
    scenarios: [
      ['One review view', [1, 2], [5 / 60, 10 / 60], 'Open the view settings, change the rebar display, and check it.', 'Run the visibility action and confirm the result.'],
      ['Twenty review views', [12, 20], [0.5, 1], 'Repeat the change in the affected views and verify them.', 'Select the views, apply the change together, and check a sample.']
    ],
    visual: 'Rebar Visibility Control interface for changing the display of reinforcement in Revit.'
  },
  '05': {
    slug: 'foundation-modeling', name: 'Foundation Modeling',
    headline: ['Build foundations', 'from the CAD plan.'],
    lead: 'Turn CAD outlines into isolated footings and rafts in Revit. Group repeated geometry into shared types and review thicknesses and level offsets by type.',
    value: ['Put foundation types and elevations under one review', 'Repeated outlines often represent the same foundation type. Group them, set naming and thickness rules, and spend the review on differences that affect the model.'],
    rows: [
      ['Identify repeated foundation shapes', 'Measure outlines and set up Revit types for each repeated size.', 'Read the selected CAD layer and group matching geometry into shared types.'],
      ['Set names and thicknesses', 'Name types and edit their thicknesses in Revit.', 'Apply naming prefixes and review thicknesses in the type summary.'],
      ['Place at the correct elevation', 'Place foundation elements and check each level offset.', 'Generate elements with thickness-based offsets and review elevations.']
    ],
    study: ['Modeling isolated footings from a foundation plan', 'CAD boundaries, naming rules, and target levels are ready. The comparison includes a review of generated types, thicknesses, and offsets.'],
    scenarios: [
      ['Ten footings · three types', [25, 45], [1, 1.5], 'Define the three types, place ten footings, and check levels.', 'Select the CAD layer, generate the types and placements, and check levels.'],
      ['Eighty footings · fifteen types', [150, 240], [3, 6], 'Define and name types, place footings, then review type assignments and elevations.', 'Generate from the plan, review the type summary, and sample-check elevations.']
    ],
    visual: 'Revit foundation modeling tool for generating isolated footings and rafts from CAD.'
  },
  '06': {
    slug: 'columns-and-rc-walls', name: 'Columns & RC Walls Modeling',
    headline: ['Turn a structural CAD plan', 'into columns and concrete walls.'],
    lead: 'Model rectangular and circular columns and reinforced-concrete walls from prepared CAD geometry, with shared types, naming prefixes, and explicit base and top levels.',
    value: ['Set naming and levels before placing the floor', 'Repeated column sizes should use the same type. Group the geometry and define levels before generating the floor, then focus the review on wall centerlines and unusual shapes.'],
    rows: [
      ['Define column types', 'Measure the shapes and build rectangular or circular types manually.', 'Group matching geometry and set separate naming prefixes where needed.'],
      ['Place vertical elements', 'Place columns, trace walls, and assign base and top levels.', 'Use the CAD geometry and dedicated wall centerline layer, then select the Revit levels.'],
      ['Review the floor', 'Check type assignments, wall thicknesses, and elevations.', 'Review the generated instances, wall thicknesses, and selected levels.']
    ],
    study: ['Modeling columns and RC walls on one floor', 'Starts from prepared column geometry and wall centerlines with the required layer naming and target Revit levels. Both paths include model review.'],
    scenarios: [
      ['Small floor · 15 columns and 5 walls', [35, 60], [1, 1.5], 'Define types, place columns and walls, and check the levels.', 'Set the CAD layers, prefixes, and levels. Generate and review the floor.'],
      ['Larger floor · 60 columns and 20 walls', [100, 170], [2, 4], 'Group types, model the elements, and review placements and wall thickness.', 'Generate the floor, review repeated types and wall thickness, and sample-check levels.']
    ],
    visual: 'Structural columns and reinforced-concrete walls generated in Revit from CAD geometry.'
  },
  '07': {
    slug: 'slabs-and-drop-panels', name: 'Slabs & Drop Panels Modeling',
    headline: ['Model slabs and drop panels', 'from the same CAD plan.'],
    lead: 'Generate slab regions from CAD boundaries, apply thickness and level settings, and place drop panels under their corresponding slabs.',
    value: ['Spend the review on edges, thickness, and levels', 'Slab modeling combines boundary tracing with repeated type and elevation edits. Start from the drawing geometry, then review the generated edges and drops against the structural plan.'],
    rows: [
      ['Create slab boundaries', 'Trace each region and correct its sketch in Revit.', 'Read boundaries from the selected CAD layer.'],
      ['Set thickness and elevation', 'Assign types and set offsets on the individual slabs.', 'Read thickness from the layer name and adjust levels in the tool.'],
      ['Place drop panels', 'Sketch the panels and locate them under the corresponding slabs.', 'Generate panels for the existing slab geometry, including irregular outlines.']
    ],
    study: ['Modeling slabs and drop panels for a concrete floor', 'CAD boundaries and thickness layers are prepared. Both workflows include checking outlines, slab elevations, and panel placement.'],
    scenarios: [
      ['One area · 5 slab regions and 5 drops', [30, 55], [1, 2], 'Trace the regions and drops, assign thickness, and check elevations.', 'Generate slabs and drops, then check outlines, thickness, and elevations.'],
      ['One floor · 30 slab regions and 20 drops', [120, 210], [3, 6], 'Create the slab and panel sketches and review the placement by zone.', 'Generate from the CAD layers, make level adjustments, and review representative zones.']
    ],
    visual: 'Revit floor model showing slab regions and drop panels modeled from CAD.'
  },
  '08': {
    slug: 'beam-modeling', name: 'Beam Modeling',
    headline: ['Model regular and irregular beams', 'from CAD across selected levels.'],
    lead: 'Use the CAD plan to place and type structural beams in Revit, from rectangular sections to irregular, L-shaped, T-shaped, and circular sections.',
    value: ['Establish the framing types once', 'Repeated beam geometry can share a Revit type. Read the available section data, select the levels that use the plan, and check representative framing on each level.'],
    rows: [
      ['Establish section types', 'Read sizes from the plan or schedule and create the types in Revit.', 'Read drawing annotations or schedule data and group matching sections.'],
      ['Place the beams', 'Trace the layout and place beams by section type.', 'Model the beam layout from the selected CAD geometry.'],
      ['Repeat on matching levels', 'Copy framing or repeat placement and check each level.', 'Select the applicable levels and generate the framing together.']
    ],
    study: ['Modeling a beam layout from a prepared structural CAD plan', 'Section data and Revit levels are ready. The repeated-floor scenario uses the same beam layout on all five levels and includes a framing review.'],
    scenarios: [
      ['One floor · 20 beams', [35, 65], [1, 1.5], 'Set up section types, trace and place the beams, then check framing.', 'Read the beam data, generate the floor, and check the placements.'],
      ['Five matching floors · 100 placements', [80, 140], [2, 4], 'Model the first floor, copy the framing to four levels, then verify.', 'Generate the layout across the five selected levels and review each level.']
    ],
    visual: 'Structural beam framing modeled in Revit from CAD geometry.'
  },
  '09': {
    slug: 'model-navigator', name: 'Model Navigator',
    headline: ['Find, filter, and select.', 'Visualize and act in Revit.'],
    lead: 'Work with model elements from one panel. Narrow your scope by category, type, or parameters, then isolate, hide, apply transparency, or color-code the result.',
    value: ['Work on exactly the part of the model you need', 'Use Current Selection to define a working scope directly from Revit. Model Navigator shows only the categories, types, counts, and filter results within that selection.'],
    rows: [
      ['Find elements within a working scope', 'Build a selection through views, properties, or manual picking.', 'Choose Active View, Entire Model, or Current Selection, then filter by category, type, or parameters.'],
      ['Find multiple element IDs', 'Search for the IDs and assemble the result manually.', 'Paste multiple Revit Element IDs and select the matching elements.'],
      ['Visualize and reuse the result', 'Apply visibility and graphic overrides, then rebuild the selection when needed.', 'Isolate, hide, reveal, or apply graphics, and save the selection for later.'],
      ['Act on a matching group', 'Find and select the elements again before editing the group.', 'Select or delete the matching group, with an option to restore the last deleted group.']
    ],
    study: ['Finding and isolating elements for a coordination review', 'The scenario uses a known category and parameter value. The repeated-review example assumes the model is ready and the first selection still applies.'],
    scenarios: [
      ['One coordination selection', [10, 15], [0.5, 1], 'Find matching elements, select them, and isolate or color them for review.', 'Filter the scope, select the result, and apply visibility or color controls.'],
      ['Five repeat reviews', [20, 40], [1.5, 3], 'Recreate the selection and the review view at each pass.', 'Save the first selection, then reload and review it on later passes.']
    ],
    visual: 'Model Navigator workspace with model scope, categories, types, filters, and visibility controls.'
  },
  '11': {
    slug: 'instance-parameter-transfer', name: 'Instance Parameter Transfer',
    headline: ['Move Revit instance data', 'in batches you can review.'],
    lead: 'Copy, move, clear, or assign instance parameter values across selected Revit elements, with compatible target parameters shown for the chosen source.',
    value: ['Keep the values that belong to each individual element', 'When a project standard changes, every instance may carry a different value. Transfer those values as a batch while keeping the element-by-element relationships.'],
    rows: [
      ['Select the instances to update', 'Build a matching selection or schedule from the model.', 'Choose a category and type, then select the instances in scope.'],
      ['Transfer values', 'Copy values individually or set up an editable schedule for the transfer.', 'Choose the source and a compatible target, then copy or move the values.'],
      ['Clean up or assign new data', 'Edit or clear values element by element or in an editable schedule.', 'Clear the selected parameter or assign a specified value across the selection.']
    ],
    study: ['Copying values between compatible instance parameters', 'Both parameters are defined, writable where needed, and compatible. Estimates include checking representative values after the transfer.'],
    scenarios: [
      ['Twenty instances', [8, 15], [0.5, 1.25], 'Select the elements, copy or edit the values, and verify them.', 'Choose the parameters, apply the copy, and spot-check the results.'],
      ['Five hundred instances', [45, 90], [2, 4], 'Use a schedule or another bulk editing method and verify the mapping.', 'Select the applicable instances, copy values, and sample-check the mapping.']
    ],
    visual: 'Instance Parameter Transfer interface showing parameter and instance selection controls.'
  },
  '12': {
    slug: 'type-parameter-transfer', name: 'Type Parameter Transfer',
    headline: ['Standardize data', 'across Revit family types.'],
    lead: 'Copy, move, assign, or clear Revit type parameter values in bulk. Find compatible target parameters and manage changes across the selected types.',
    value: ['Change the type definition once', 'A type parameter belongs to the family type and can affect many placed elements. Review the selected types before applying a change across the model.'],
    rows: [
      ['Find the types in scope', 'Open or schedule the relevant family types and identify the parameters.', 'Browse by category, select types, and view available type parameters.'],
      ['Copy or move a parameter', 'Transfer values type by type or prepare a suitable schedule.', 'Choose a compatible target and transfer the values across the selection.'],
      ['Standardize values', 'Open each type or edit through the schedule and verify the result.', 'Set or clear the chosen value in bulk and check representative types.']
    ],
    study: ['Standardizing a compatible parameter across family types', 'The destination parameter exists and is writable on the selected types. Estimates include selecting the types and checking a sample.'],
    scenarios: [
      ['Ten family types', [8, 15], [0.5, 1.25], 'Find and update ten types, then review their values.', 'Select the types and the parameter, apply, and review a sample.'],
      ['Eighty family types', [30, 60], [1.5, 3], 'Update the values by type or through an editable schedule and verify.', 'Select the eighty types, apply the bulk update, and sample-check the changes.']
    ],
    visual: 'Type Parameter Transfer interface for updating parameter values across Revit family types.'
  },
  '13': {
    slug: 'legs-generator', name: 'Legs Generator',
    headline: ['Detail reinforcement legs', 'where concrete edges change.'],
    lead: 'Generate hook legs for top or bottom rebar layers at boundaries, openings, and drop panels while accounting for local thickness and specified cover.',
    value: ['Handle the edges and openings that slow down detailing', 'Drop panels and openings interrupt otherwise repetitive reinforcement. Use the host geometry to guide the generated legs, then review transitions and cover against the design detail.'],
    rows: [
      ['Identify the edges that need legs', 'Inspect concrete boundaries, openings, and drop panel edges.', 'Use the tool to detect the relevant edges of the selected concrete geometry.'],
      ['Set lengths and cover', 'Calculate lengths at thickness changes and adjust individual bends.', 'Use the host thickness and configured cover to generate the legs.'],
      ['Check the resulting detail', 'Inspect the modeled bars at openings, corners, and transitions.', 'Review generated legs where concrete thickness and geometry change.']
    ],
    study: ['Modeling rebar hook legs around slab edges and openings', 'Concrete hosts and reinforcement layers are already modeled. Both workflows include checking cover and geometry at representative transitions.'],
    scenarios: [
      ['One slab zone with an opening', [20, 35], [1, 1.5], 'Identify edge bars, model the legs, and check the opening.', 'Run the edge workflow and check the generated legs around the opening.'],
      ['Five slab zones with drops or openings', [70, 120], [2.5, 5], 'Model the legs and verify bends across five slab zones.', 'Apply the workflow to the five zones and review thickness and cover transitions.']
    ],
    visual: 'Revit reinforcement detail showing generated hook legs at concrete edges or openings.'
  },
  '14': {
    slug: 'selection-by-parameter', name: 'Selection by Parameter',
    headline: ['Pick one element.', 'Select the matching values.'],
    lead: 'Use a sample element to find available instance parameters and select every visible element in the active view with the value you choose.',
    value: ['Turn a value you can see into a selection you can use', 'Find doors with a particular mark, beams with a shared connection value, or other elements carrying the same project parameter. The selection stays within the active view.'],
    rows: [
      ['Discover the parameter', 'Inspect properties and identify the parameter on a sample element.', 'Pick the element and browse its instance parameters.'],
      ['Find the values in the view', 'Inspect elements, or set up a schedule or another filter.', 'Choose a parameter to see its distinct values in the active view.'],
      ['Select the matching group', 'Assemble a selection and check that it matches the chosen value.', 'Choose a value and run Filter to select matching visible elements.']
    ],
    study: ['Selecting elements by an instance parameter value', 'Uses an existing value in the active view. Each timing includes checking that the resulting selection is the intended group.'],
    scenarios: [
      ['One door mark selection', [4, 8], [0.25, 0.5], 'Find the mark, gather matching doors, and verify the selection.', 'Pick a sample, choose Mark and its value, then check the selection.'],
      ['Five parameter selections', [15, 30], [1, 2], 'Repeat the search or schedule filtering for five coordination selections.', 'Use the value picker for each pass and verify the matching elements.']
    ],
    visual: 'Selection by Parameter interface displaying instance parameters and values for active-view filtering.'
  },
  '15': {
    slug: 'warning-clash-visualizer', name: 'Warning Clash Visualizer',
    headline: ['Turn a Revit warning', 'into a focused 3D review.'],
    lead: 'Open project warnings in one list, then isolate, color-code, and zoom to the affected elements in a reusable 3D view.',
    value: ['Go from a warning message to the location that needs attention', 'A warning tells you what Revit detected. Open it in a dedicated section-box view so the team can see which elements are involved and decide how to resolve it.'],
    rows: [
      ['Find the elements behind a warning', 'Open the warning, locate its element IDs, and navigate to them.', 'Choose the warning in the tool and select its elements.'],
      ['Frame the affected area', 'Open a 3D view, isolate the elements, and adjust a section box.', 'Reuse WarningView with automatic isolation, section box, and zoom.'],
      ['Distinguish the elements', 'Apply graphic overrides for each element as needed.', 'Use the generated color overrides to distinguish the elements.']
    ],
    study: ['Preparing a 3D view for Revit warning triage', 'Warnings already exist in the project. Estimates cover finding and visually inspecting the affected elements. Resolving the underlying issues is a separate task.'],
    scenarios: [
      ['One warning', [6, 12], [0.25, 0.75], 'Find the elements, isolate them, and frame the area in 3D.', 'Open the warning in the dedicated 3D view and inspect the elements.'],
      ['Ten warnings', [40, 80], [2.5, 3.5], 'Repeat element lookup, framing, and visual inspection for ten warnings.', 'Review each warning in the reusable 3D view and record the next actions.']
    ],
    visual: 'Warning Clash Visualizer showing Revit warnings and the affected elements for review.'
  },
  '16': {
    slug: 'door-data-sync', name: 'Door Data Sync',
    headline: ['Update Revit door data', 'from a SQL Server workflow.'],
    lead: 'Export door data to SQL Server, make external edits, and sync supported values back to the corresponding Revit doors using their UniqueId.',
    value: ['Keep each external record tied to its Revit door', 'Door schedules can change after data is shared with another team. Use the Revit UniqueId to match the return update to the original element and review the import counts.'],
    rows: [
      ['Prepare door data for handoff', 'Create and export a door schedule, then prepare it for the receiving system.', 'Create the Doors table and export door records to SQL Server.'],
      ['Return external updates', 'Match changed records back to the model and update supported values.', 'Import updated values and match them to doors by Revit UniqueId.'],
      ['Review what changed', 'Compare exports and model values for missed or duplicated records.', 'Review export and update counts. Existing records and read-only parameters are handled by the workflow.']
    ],
    study: ['Returning externally edited door finish data to Revit', 'The external edits are ready and the SQL Server connection is configured. Both estimates cover matching the records, updating the model, and checking a sample.'],
    scenarios: [
      ['Twenty edited doors', [10, 20], [0.75, 1.5], 'Find and update the twenty doors and verify their finishes.', 'Import the updates by UniqueId and check representative doors.'],
      ['Two hundred edited doors', [45, 90], [1.75, 3.75], 'Match and apply the external updates, then audit a sample.', 'Sync the edited records and review the update counts and sample values.']
    ],
    visual: 'Door Data Sync interface for exporting Revit door data and importing SQL Server updates.'
  },
  '17': {
    slug: 'ceiling-wizard', name: 'Ceiling Wizard',
    headline: ['Design suspended ceilings.', 'Review and generate them in Revit.'],
    lead: 'Lay out gypsum and tile ceilings from room geometry. Review module sizes, borders, and elevations, then generate the selected rooms after the design is checked.',
    value: ['Choose the right level of control for each ceiling', 'Use Full Gypsum or Full Tiles for straightforward rooms. Use Perimeter + Whole Tiles or Divided Bays when the design needs controlled borders, internal bands, or stepped transitions.'],
    features: [
      { title: 'Four ceiling patterns', text: 'Choose Full Gypsum, Full Tiles, Perimeter + Whole Tiles, or Divided Bays.' },
      { title: 'Tile module detection', text: 'Read module sizes from Revit ceiling types and material surface patterns.' },
      { title: 'Full-tile grid review', text: 'Start complete modules from two room edges and review the cuts at the other ends.' },
      { title: 'Gypsum borders and transitions', text: 'Set border limits and review stepped transitions or vertical bulkheads where ceiling heights differ.' },
      { title: 'Divided-bay layouts', text: 'Set gypsum bands, symmetric spans, and directional tile modules. Review the layout and tile counts.' },
      { title: 'Structural height checks', text: 'Validate the proposed ceiling elevation against the lowest detected soffit, including loaded structural links.' },
      { title: 'Group similar rooms', text: 'Use the confirmed design settings to identify compatible rooms and apply a representative layout.' },
      { title: 'Review, modify, and generate', text: 'Work with host or linked rooms, review existing ceiling conditions, and generate the selected rooms together.' }
    ],
    demos: [
      'See the automated workflow from room selection and ceiling pattern to reviewed Revit elements.',
      'See the design controls for a custom layout, including how the pattern is reviewed before generation.'
    ],
    rows: [
      ['Lay out the ceiling pattern', 'Set out tile modules, edge cuts, and gypsum borders using trial layouts.', 'Choose a production pattern and review calculated tile modules, borders, or bay spans.'],
      ['Check ceiling elevations', 'Inspect the model for overhead structure and compare ceiling levels manually.', 'Check the proposed elevation against the lowest detected structural soffit.'],
      ['Repeat and generate', 'Rebuild the design room by room or copy where the geometry allows.', 'Group similar rooms, review the representative design, and Generate Selected.']
    ],
    study: ['Setting out a suspended tile ceiling with gypsum borders', 'Starts with modeled rooms and available Revit ceiling types. Both estimates include layout, height checks, and a review of the modeled result.'],
    scenarios: [
      ['One room · custom ceiling layout', [20, 30], [2, 3], 'Lay out full tiles and borders, check the soffit, and model the ceiling.', 'Set the pattern and elevation, review the design, and generate the room.'],
      ['Five similar rooms · shared layout', [70, 120], [4, 8], 'Design the first room, repeat or adapt it in four more, and check levels.', 'Review the representative design, generate the compatible room group, and spot-check.']
    ],
    visual: 'Suspended ceiling layout in Revit showing the tile pattern and gypsum borders.'
  }
};
